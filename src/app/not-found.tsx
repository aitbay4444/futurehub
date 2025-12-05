import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="bg-blue-50 p-6 rounded-full mb-6 animate-pulse">
        <Search className="w-12 h-12 text-blue-600" />
      </div>
      <h2 className="text-4xl font-black text-neutral-900 mb-2">404</h2>
      <p className="text-xl text-neutral-500 mb-8 max-w-md">
        Похоже, этой страницы не существует. Возможно, вы искали несуществующий университет?
      </p>
      <Link href="/">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
}