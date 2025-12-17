import { BooksRepositoryImpl } from "../../data/books.repository.impl";
import { CreateBookParams } from "../../domain/types/create.book";

export const CreateBooksUsecase = (params: CreateBookParams) => {
  return new BooksRepositoryImpl().create(params);
};
