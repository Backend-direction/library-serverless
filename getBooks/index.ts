import { AzureFunction, Context, HttpRequest } from "@azure/functions";
const { CosmosClient } = require("@azure/cosmos");

import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_SECRET;
const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const client = new CosmosClient({ endpoint, key });

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    const querySpec = {
        query: "SELECT * FROM c"
    };

    try {
        const {resources: items} = await client
            .database(databaseName)
            .container(collectionName)
            .items
            .query(querySpec)
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

export default httpTrigger;