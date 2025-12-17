import { BooksRepositoryImpl } from "../../data/books.repository.impl";

export const ListBooksUsecase = () => {
  return new BooksRepositoryImpl().list();
};
