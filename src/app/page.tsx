import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh w-full ">
      <h1 className="font-semibold text-4xl">House of Books</h1>
      <h6>Bem-vindo à nossa bibliotca!</h6>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Biblioteca digital</CardTitle>
          <CardDescription>
            Conheça nossa biblioteca digital
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href={"/books"}>
            <Button type="submit" className="w-full">
              Conhecer biblioteca
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
