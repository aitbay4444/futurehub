import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // <-- Импорт шапки
import { Footer } from "@/components/Footer"; // <-- Импорт подвала
import { Chatbot } from "@/components/Chatbot";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "FutureCampus | Единый каталог университетов",
  description: "Сравнивайте программы, цены и рейтинги университетов Казахстана на FutureCampus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />          {/* Шапка всегда сверху */}
        {children}          {/* Тут меняются страницы */}
        <Footer />          {/* Подвал всегда снизу */}
        <Chatbot /> {/* <-- БОТ ЗДЕСЬ */}
        <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}