"use client";

import { useEffect } from "react";
import { useListBooksController } from "../controllers/useListBooksController";

export const ListBookGrid = () => {
  const { books, loading, listBooks } = useListBooksController();

  useEffect(() => {
    listBooks();
  }, []);

  return (
    <div className="grid grid-cols-2 xl:grid-cols-7 w-full gap-5 p-5">
      {books.map((book, index) => (
        <div
          key={index}
          className="flex flex-col overflow-hidden relative w-full h-56 justify-between p-3 border rounded-md hover:shadow-md transition-all"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(225deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
            }}
          />

          <div className="z-10 flex flex-col h-full justify-between">
            <div></div>
            <p className="font-semibold uppercase text-base max-w-32">
              {book.title}
            </p>
            <p className="text-xs text-sky-500">{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
