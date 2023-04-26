import { CosmosClient } from "@azure/cosmos";
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_SECRET;
const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const client = new CosmosClient({ endpoint, key });

const removeBook: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    try {
			await client
					.database(databaseName)
					.container(collectionName)
					.item(req.query.bookId, req.query.partitionValue)
					.delete();
			
			context.res = {
					status: 204
			};
    } catch(e) {
			context.res = {
				status: 500,
				body: 'My custom error' + e.message
		};
    }
};

export default removeBook;