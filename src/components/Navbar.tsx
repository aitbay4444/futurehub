"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, User } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export function Navbar() {
  return (
    // ДОБАВИЛИ dark:border-neutral-800 и dark:bg-neutral-950/80
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-xl font-black text-neutral-900 dark:text-white tracking-tight">
            Future<span className="text-blue-600">Campus</span>
          </span>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Каталог</Link>
          <Link href="/compare" className="hover:text-blue-600 dark:hover:text-white transition-colors">Сравнение</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Гранты 2025</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">О проекте</Link>
        </nav>

        {/* Кнопки справа */}
        <div className="flex items-center gap-4">
          
          {/* Кнопка темы */}
          <ModeToggle /> 

          <div className="hidden md:flex text-sm font-bold text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors">
            RU <span className="mx-2 text-neutral-200 dark:text-neutral-700">|</span> KZ
          </div>
          
          <Link href="/admin">
            <Button variant="outline" size="sm" className="gap-2 hidden sm:flex border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-400 dark:hover:bg-blue-900">
                <User className="w-4 h-4" />
                Вход для ВУЗов
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}