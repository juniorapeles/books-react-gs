"use client";

import { useState } from "react";
import { CreateBooksUsecase } from "../../application/usecases/create.book.usecase";
import { useListBooksController } from "./useListBooksController";
import { toast } from "sonner";

export const useCreateBookController = () => {
  const [loading, setLoading] = useState(false);

  // Dados
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { listBooks } = useListBooksController();

  const createBook = async () => {
    try {
      setLoading(true);
      await CreateBooksUsecase({ author, title });

      listBooks();

      toast.success("Livro criado com sucesso!");

      return { ok: true };
    } catch (error) {
      toast.error("Falha ao criar livro!");
      return { ok: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createBook,

    title,
    author,

    setTitle,
    setAuthor,
  };
};
