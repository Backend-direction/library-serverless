import { httpClient } from "../http-client/client"
import { IBook } from "../interfaces/IBook"
import { IPaginate } from "../interfaces/IPaginate";

export async function fetchBooks(offset = 0, limit = 10): Promise<IPaginate<IBook[]>> {
  const res = await httpClient.get<IPaginate<IBook[]>>(`/getBooks?offset=${offset}&limit=${limit}`);
  return res.data;
}