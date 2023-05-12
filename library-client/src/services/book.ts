import { httpClient } from "../http-client/client";
import { IBook } from "../interfaces/IBook";

export async function fetchBook(id: unknown, partionId: unknown): Promise<IBook> {
  if(!id || !partionId) throw new Error('Invalid params were provided');
  
  const res = await httpClient.get<IBook>(`/getBook?bookId=${id}&partitionValue=${partionId}`);
  return res.data;
}