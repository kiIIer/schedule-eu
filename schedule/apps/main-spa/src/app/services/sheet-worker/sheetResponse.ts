export interface SheetResponse<T> {
  majorDimension: string,
  range: string,
  values: T[]
}
