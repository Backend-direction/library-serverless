import { httpClient } from "../http-client/client"
import { IBook } from "../interfaces/IBook"

export async function fetchBooks(offset = 0, limit = 10): Promise<IBook[]> {
  const res = await httpClient.get<IBook[]>(`/getBooks?offset=${offset}&limit=${limit}`)
  return res.data;
}