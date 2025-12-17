import { create } from "zustand";
import { Book } from "../../domain/entities/Book";

interface BooksStore {
  loading: boolean;
  books: Book[];
  setBooks: (books: Book[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useBooksStore = create<BooksStore>((set) => ({
  loading: false,
  books: [],
  setBooks: (books) => set(() => ({ books })),
  setLoading: (loading) => set(() => ({ loading })),
}));
