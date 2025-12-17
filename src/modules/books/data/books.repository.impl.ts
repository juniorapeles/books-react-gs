import axios from "axios";
import { BooksRepository } from "../domain/repositories/books.repository";
import { ListBooksDTO } from "../domain/types/list.books";
import { CreateBookParams, CreateBookDTO } from "../domain/types/create.book";

export class BooksRepositoryImpl implements BooksRepository {
  async list(): Promise<ListBooksDTO> {
    try {
      const response = await axios.get<ListBooksDTO>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books`
      );

      return response.data;
    } catch (error) {
      console.log("[BooksRepositoryImpl] List", error, { color: "#FF2424" });
      throw Error("Não foi possível listar os livros.");
    }
  }

  async create(params: CreateBookParams): Promise<CreateBookDTO> {
    try {
      const response = await axios.post<CreateBookDTO>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/books`,
        params
      );

      return response.data;
    } catch (error) {
      console.log("[BooksRepositoryImpl] Create", error, { color: "#FF2424" });
      throw Error("Não foi possível listar os livros.");
    }
  }
}
