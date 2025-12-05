import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // <-- Импорт шапки
import { Footer } from "@/components/Footer"; // <-- Импорт подвала
import { Chatbot } from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "DataHub ВУЗ-ов РК | Единый каталог",
  description: "Сравнивайте программы, цены и рейтинги университетов Казахстана.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navbar />          {/* Шапка всегда сверху */}
        {children}          {/* Тут меняются страницы */}
        <Footer />          {/* Подвал всегда снизу */}
        <Chatbot /> {/* <-- БОТ ЗДЕСЬ */}
      </body>
    </html>
  );
}