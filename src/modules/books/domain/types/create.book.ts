import { Book } from "../entities/Book";

export interface CreateBookParams {
  title: string;
  author: string;
}

export type CreateBookDTO = Book;
