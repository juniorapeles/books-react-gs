import { ListBooksUsecase } from "../../application/usecases/list.books.usecase";
import { useBooksStore } from "../stores/useBooksStore";

export const useListBooksController = () => {
  const { books, loading, setBooks, setLoading } = useBooksStore();

  const listBooks = async () => {
    try {
      setLoading(true);
      const response = await ListBooksUsecase();

      setBooks(response);
    } catch (error) {
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    listBooks,
    books,
    loading,
  };
};
