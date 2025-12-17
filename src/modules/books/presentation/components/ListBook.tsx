"use client";

import { useEffect } from "react";
import { useListBooksController } from "../controllers/useListBooksController";

export const ListBookGrid = () => {
  const { books, loading, listBooks } = useListBooksController();

  useEffect(() => {
    listBooks();
  }, []);

  return (
    <div className="grid grid-cols-7 w-full gap-5 p-5">
      {books.map((book, index) => (
        <div
          key={index}
          className="flex flex-col w-full h-56 justify-between p-3 border rounded-md hover:shadow-md transition-all"
        >
          <div></div>
          <p className="font-semibold uppercase text-base max-w-32">
            {book.title}
          </p>
          <p className="text-xs text-zinc-400">{book.author}</p>
        </div>
      ))}
    </div>
  );
};
