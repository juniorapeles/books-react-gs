"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useCreateBookController } from "../controllers/useCreateBookController";
import { Spinner } from "@/shared/components/ui/spinner";
import { useState } from "react";

export function CreateBookDialog() {
  const [open, setOpen] = useState(false);

  const { loading, createBook, title, author, setTitle, setAuthor } =
    useCreateBookController();

  const handleCreate = () => {
    createBook().then((res) => res.ok && setOpen(false));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form onSubmit={createBook}>
        <DialogTrigger asChild>
          <Button variant="outline">Criar livro</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Novo livro</DialogTitle>
            <DialogDescription>
              Informe o nome do livro e o autor.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input
                id="name-1"
                name="name"
                value={title}
                onChange={(v) => setTitle(v.target.value)}
                defaultValue="Pedro Duarte"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Autor</Label>
              <Input
                id="username-1"
                name="author"
                value={author}
                onChange={(v) => setAuthor(v.target.value)}
                defaultValue="@peduarte"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" onClick={handleCreate}>
              {loading ? <Spinner /> : "Criar livro"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
