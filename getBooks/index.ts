import { AzureFunction, Context, HttpRequest } from "@azure/functions";
const { CosmosClient } = require("@azure/cosmos");

import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_SECRET;
const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const client = new CosmosClient({ endpoint, key });

const getBooks: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('getBooks function processed a request.');
    
    const query = {
			query: "SELECT * FROM root OFFSET 1 LIMIT 10",
			parameters: [
				{
					name: "@offset",
					value: req.query.offset
				},
				{
					name: '@limit',
					val: req.query.limit
				}
			]
		}

    try {
        const {resources: items} = await client
            .database(databaseName)
            .container(collectionName)
            .items
            .query(query)
            .fetchAll();

        context.res = {
            status: 200,
            body: items
        };
    } catch (e) {
        context.res = {
            status: 500,
            body: 'Error' + e.message
        };
    }

};

export default getBooks;