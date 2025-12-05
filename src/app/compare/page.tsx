"use client";

import Link from "next/link";
import Image from "next/image";
import { universities } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowLeft, Trash2, HelpCircle } from "lucide-react";
import { useCompareStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompareStore();
  const [mounted, setMounted] = useState(false);

  // Ждем загрузки клиента, чтобы избежать ошибок гидратации
  useEffect(() => {
    setMounted(true);
  }, []);

  // Фильтруем вузы: берем только те, чьи ID есть в списке сравнения
  const list = universities.filter((u) => compareList.includes(u.id));

  // Если еще грузится или список пуст
  if (!mounted) return null;

  if (list.length === 0) {
      return (
          <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 max-w-md">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold mb-2 text-neutral-900">Список пуст</h1>
                <p className="text-neutral-500 mb-6">Вы еще не выбрали университеты для сравнения. Вернитесь в каталог и нажмите кнопку "Сравнить" или "+" на карточке.</p>
                <Link href="/">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Перейти в каталог</Button>
                </Link>
              </div>
          </main>
      )
  }

  return (
    <main className="min-h-screen bg-neutral-50 py-10 px-4">
      <div className="max-w-[1600px] mx-auto">
        {/* Хедер страницы */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <Link href="/" className="text-neutral-500 hover:text-neutral-900 flex items-center gap-2 mb-2 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Назад к поиску
            </Link>
            <h1 className="text-3xl font-black text-neutral-900">Сравнение ({list.length})</h1>
          </div>
          <div className="flex gap-3">
             <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={clearCompare}>
                <Trash2 className="w-4 h-4 mr-2"/> Очистить список
             </Button>
          </div>
        </div>

        {/* Таблица сравнения */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-x-auto pb-4">
          <div 
            className="grid divide-x divide-neutral-100 min-w-[1000px]"
            // Первая колонка 280px, остальные равные
            style={{ gridTemplateColumns: `280px repeat(${list.length}, minmax(280px, 1fr))` }}
          >
            
            {/* 1. ЛЕВАЯ КОЛОНКА (ПАРАМЕТРЫ) */}
            <div className="bg-neutral-50/80 backdrop-blur-sm p-0 pt-[280px] flex flex-col text-sm font-bold text-neutral-500 sticky left-0 z-20 border-r border-neutral-200">
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Город</div>
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Рейтинг</div>
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Мин. стоимость (год)</div>
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Трудоустройство</div>
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Мин. балл ЕНТ</div>
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Общежитие</div>
              <div className="h-16 flex items-center px-6 border-b border-neutral-100">Военная кафедра</div>
              <div className="h-32 flex items-center px-6 border-b border-neutral-100">Гранты и скидки</div>
            </div>

            {/* 2. КОЛОНКИ ВУЗОВ */}
            {list.map((uni) => (
              <div key={uni.id} className="relative flex flex-col min-w-[280px]">
                {/* Кнопка удаления (крестик) */}
                <button 
                    onClick={() => removeFromCompare(uni.id)}
                    className="absolute top-3 right-3 z-10 text-neutral-300 hover:text-red-500 bg-white rounded-full p-2 hover:bg-red-50 transition-colors"
                    title="Убрать из сравнения"
                >
                    <X className="w-5 h-5"/>
                </button>

                {/* Шапка вуза (Фото + Название) */}
                <div className="h-[280px] flex flex-col items-center text-center justify-center border-b border-neutral-100 p-6 relative group">
                    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform">
                         <Image src={uni.images.main} alt={uni.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight px-2 h-12 overflow-hidden">{uni.shortName}</h3>
                    <p className="text-xs text-neutral-400 mb-4 h-8 overflow-hidden">{uni.name}</p>
                    <Link href={`/university/${uni.id}`}>
                        <Button variant="outline" size="sm" className="w-full">Перейти в профиль</Button>
                    </Link>
                </div>

                {/* Значения параметров */}
                <div className="flex flex-col text-sm text-neutral-900 font-medium bg-white">
                    {/* Город */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100">{uni.city}</div>
                    
                    {/* Рейтинг */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100">
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                            ★ {uni.rating}
                        </span>
                    </div>
                    
                    {/* Цена (Берем первую программу или 0) */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100 font-bold text-lg text-blue-600">
                        {uni.programs && uni.programs.length > 0 
                            ? new Intl.NumberFormat('ru-KZ').format(uni.programs[0].price) + " ₸"
                            : "Нет данных"}
                    </div>

                    {/* Трудоустройство */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100 font-bold">
                        {uni.stats.employmentRate}%
                    </div>

                    {/* Мин Балл */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100">
                        {uni.stats.minScore} баллов
                    </div>

                    {/* Общежитие */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100">
                        {uni.features.some(f => f.toLowerCase().includes("общежитие")) ? 
                            <Check className="w-6 h-6 text-green-500 bg-green-50 p-1 rounded-full"/> : 
                            <X className="w-6 h-6 text-red-300"/>}
                    </div>

                    {/* Военка */}
                    <div className="h-16 flex items-center justify-center border-b border-neutral-100">
                        {uni.features.some(f => f.toLowerCase().includes("военная")) ? 
                             <Check className="w-6 h-6 text-green-500 bg-green-50 p-1 rounded-full"/> : 
                             <X className="w-6 h-6 text-red-300"/>}
                    </div>

                    {/* Гранты (Длинный текст) */}
                    <div className="h-32 flex items-center justify-center text-center p-4 text-xs text-neutral-500 border-b border-neutral-100 leading-snug">
                        {uni.admissions.grants}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}