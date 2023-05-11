export interface IPaginate<T> {
  data: T,
  nextPage: number,
  previousPage: number,
  limit?: number,
}