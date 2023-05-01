import { CosmosClient } from "@azure/cosmos";
import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_SECRET;
const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const client = new CosmosClient({ endpoint, key });

const updateBook: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
	const updatedBook = {
		author: req.body.author,
		country: req.body.country,
		imageLink: req.body.imageLink,
		language: req.body.language,
		link: req.body.link,
		pages: req.body.pages,
		title: req.body.title,
		year: req.body.year,
		id: req.body.id
	}

	try {
		const { resource } = await client
			.database(databaseName)
			.container(collectionName)
			.item(updatedBook.id, updatedBook.language)
			.replace(updatedBook);
		
		context.res = {
			status: 200,
			body: resource
		};
	} catch(e) {
			context.res = {
				status: 500,
				body: 'My custom error' + e.message
			};
	}
};

export default updateBook;