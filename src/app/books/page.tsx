import { CreateBookDialog } from "@/modules/books/presentation/components/CreateBookDialog";
import { ListBookGrid } from "@/modules/books/presentation/components/ListBook";

export default function Books() {
  return (
    <div className="flex flex-col items-center gap-10 w-full h-dvh">
      <div className="flex items-center justify-between w-full p-5">
        <h4 className="text-3xl font-semibold">Biblioteca Virtual</h4>
        <CreateBookDialog />
      </div>
      <ListBookGrid />
    </div>
  );
}
