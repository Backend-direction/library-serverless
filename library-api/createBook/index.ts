import { CosmosClient } from "@azure/cosmos";
import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { middleware, validation } from "@senacor/azure-function-middleware";

import * as dotenv from "dotenv";
import Joi = require("joi");
dotenv.config();

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_SECRET;
const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const client = new CosmosClient({ endpoint, key });

const schema = Joi.object().keys({
	author: Joi.string().required(),
	country: Joi.string(),
	imageLink: Joi.string(),
	language: Joi.string(),
	link: Joi.string().empty(''),
	pages: Joi.number(),
	title: Joi.string().required(),
	year: Joi.number(),
});

const createBook: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const itemBody = {
				author: req.body.author,
        country: req.body.country,
        imageLink: req.body.imageLink,
        language: req.body.language,
        link: req.body.link,
        pages: req.body.pages,
        title: req.body.title,
        year: req.body.year
    };

		try {
			const { resource } = await client
				.database(databaseName)
				.container(collectionName)
				.items
				.create(itemBody);

				context.res = {
					body: resource
			};
		} catch(e) {
			context.res = {
				status: 500,
				body: `My custom error ${e}`
		  };
		}

};

export default middleware([validation(schema)], createBook, []);