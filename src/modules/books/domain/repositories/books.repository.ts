import { CreateBookDTO, CreateBookParams } from "../types/create.book";
import { ListBooksDTO } from "../types/list.books";

export interface BooksRepository {
  list(): Promise<ListBooksDTO>;
  create(params: CreateBookParams): Promise<CreateBookDTO>;
}
