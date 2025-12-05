import Link from "next/link";
import { GraduationCap, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Колонка 1: Лого */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xl font-bold">DataHub RK</span>
            </div>
            <p className="text-sm leading-relaxed">
              Единая платформа для абитуриентов Казахстана. Помогаем сделать правильный выбор с 2025 года.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Поиск вузов</Link></li>
              <li><Link href="/compare" className="hover:text-white transition-colors">Сравнение</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Калькулятор ЕНТ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Справочник профессий</Link></li>
            </ul>
          </div>

          {/* Колонка 3: ВУЗам */}
          <div>
            <h4 className="text-white font-bold mb-4">Партнерам</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Личный кабинет вуза</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Разместить рекламу</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Аналитика рынка</Link></li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <p className="text-sm mb-2">Алматы, ул. Байзакова 280</p>
            <p className="text-sm mb-4">support@datahub.kz</p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          © 2025 DataHub Hackathon Team. Все права защищены.
        </div>
      </div>
    </footer>
  );
}