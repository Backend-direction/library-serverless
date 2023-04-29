import { AzureFunction, Context, HttpRequest } from "@azure/functions";
const { CosmosClient } = require("@azure/cosmos");

import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_SECRET;
const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const client = new CosmosClient({ endpoint, key });

const getBook: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('getBook function processed a request.');

    try {
        const db = client.database(databaseName);
        const container = db.container(collectionName);
        const bookItem = await container.item(req.query.bookId, req.query.partitionValue);
        const book = await bookItem.read();
        const itemDetails = book.resource;

        if(!itemDetails) {
            context.res = {
                status: 404,
                body: "Item was not found"
            };
            return;
        }

        context.res = {
            status: 200,
            body: itemDetails
        };
    } catch (e) {
        context.res = {
            status: 500,
            body: 'My custom Error' + e.message
        };
    }

};

export default getBook;