"use client";

import { useState, useEffect } from "react";
import { universities } from "@/lib/data";
import { UniversityCard } from "@/components/UniversityCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRightLeft, Sparkles, TrendingUp, ShieldCheck, MapPin, Construction } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCompareStore } from "@/lib/store";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Алматы");
  const compareList = useCompareStore((state) => state.compareList);
  const [mounted, setMounted] = useState(false);

  const [index, setIndex] = useState(0);
  const headlines = [
    { start: "Найди свой", end: "Идеальный ВУЗ" },
    { start: "Построй свое", end: "Будущее" },
    { start: "Выбери лучшую", end: "Профессию" },
    { start: "Узнай больше про", end: "ВУЗ мечты" },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Актау"];

  const filteredUniversities = universities.filter((uni) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      uni.name.toLowerCase().includes(query) ||
      uni.shortName.toLowerCase().includes(query) ||
      uni.programs.some(p => p.name.toLowerCase().includes(query));
    
    const matchesCity = selectedCity === "Алматы" 
        ? (uni.city === "Алматы" || uni.city === "Каскелен")
        : uni.city === selectedCity;

    return matchesSearch && matchesCity;
  });

  const quickTags = ["IT", "Медицина", "Экономика", "Педагогика"];
  const YOUTUBE_VIDEO_ID = "WHrDLbCjH0A";

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative border-b border-neutral-200 dark:border-neutral-800 overflow-hidden h-[650px] flex items-center justify-center">
        
        {/* ФОНОВОЕ ВИДЕО */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute inset-0 w-[300%] h-[300%] -left-[100%] -top-[100%]">
                <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`}
                    className="w-full h-full object-cover pointer-events-none opacity-50 dark:opacity-30" // Чуть темнее видео ночью
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                />
            </div>
            {/* ВУАЛЬ: Днем белая, Ночью черная */}
            <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-[1px]"></div>
        </div>

        {/* КОНТЕНТ */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-100 dark:border-blue-800 shadow-sm">
                By 404 Team with ❤
            </div>
            
            {/* ЗАГОЛОВОК */}
            <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white tracking-tight drop-shadow-sm"
                  >
                    {headlines[index].start} <br className="md:hidden" />
                    <span className="text-blue-600 dark:text-blue-500">{headlines[index].end}</span>
                  </motion.h1>
                </AnimatePresence>
            </div>

            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Единый реестр университетов Казахстана. Реальные отзывы, актуальные цены, гранты и 3D-туры по кампусам.
            </p>
          </motion.div>

          <motion.div 
            className="relative max-w-xl mx-auto flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
                {/* ПОИСК: Адаптация фона */}
                <div className="relative bg-white dark:bg-neutral-900 rounded-lg flex items-center shadow-xl border border-transparent dark:border-neutral-700">
                    <div className="pl-4 text-neutral-400"><Search className="h-5 w-5" /></div>
                    <Input 
                        type="text" 
                        placeholder="Например: КБТУ, IT, Стоматология..." 
                        className="h-14 border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* ТЕГИ: Адаптация */}
            <div className="flex flex-wrap justify-center gap-2">
                {quickTags.map(tag => (
                    <button 
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-4 py-1.5 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full text-sm text-neutral-600 dark:text-neutral-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:scale-105"
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4">
                <Link href="/compare">
                    <Button 
                        variant={mounted && compareList.length > 0 ? "default" : "outline"} 
                        className={`h-12 px-6 rounded-full text-md gap-2 shadow-lg w-full sm:w-auto transition-all ${
                            mounted && compareList.length > 0 
                            ? "bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white" 
                            : "bg-white/90 dark:bg-neutral-800/90 backdrop-blur hover:bg-white dark:hover:bg-neutral-700 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white"
                        }`}
                    >
                        <ArrowRightLeft className="w-4 h-4" />
                        {mounted && compareList.length > 0 
                            ? `Сравнить (${compareList.length})` 
                            : "Сравнить вузы"}
                    </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- БЛОК ПРЕИМУЩЕСТВ (Темный режим) --- */}
      <section className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-8 relative z-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { icon: Sparkles, color: "blue", title: "Актуальные данные", text: "Цены и гранты на 2025 год" },
                  { icon: TrendingUp, color: "purple", title: "Умное сравнение", text: "Аналитика по 20+ параметрам" },
                  { icon: ShieldCheck, color: "green", title: "Проверено МОН РК", text: "Только лицензированные вузы" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow">
                    <div className={`p-3 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400`}>
                        <item.icon className="w-6 h-6"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.text}</p>
                    </div>
                </div>
              ))}
          </div>
      </section>

      {/* --- СПИСОК ВУЗОВ --- */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Популярные университеты</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-1">Выберите город для поиска</p>
          </div>
          
          {/* ФИЛЬТР ГОРОДОВ */}
          <div className="flex bg-white dark:bg-neutral-800 p-1 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm overflow-x-auto max-w-full">
             {cities.map(city => (
                 <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                        selectedCity === city 
                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md" 
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700"
                    }`}
                 >
                     {city}
                 </button>
             ))}
          </div>
        </div>
        
        {selectedCity === "Алматы" ? (
            filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUniversities.map((uni, index) => (
                <motion.div
                    key={uni.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                    <UniversityCard university={uni} />
                </motion.div>
                ))}
            </div>
            ) : (
            <div className="text-center py-32 bg-white dark:bg-neutral-800 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700">
                <Search className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Ничего не найдено</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Попробуйте изменить запрос.</p>
                <Button variant="link" onClick={() => setSearchQuery("")} className="text-blue-600 mt-2">
                    Сбросить поиск
                </Button>
            </div>
            )
        ) : (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-40 bg-white dark:bg-neutral-800 rounded-3xl border border-dashed border-neutral-200 dark:border-neutral-700"
            >
                <div className="bg-yellow-50 dark:bg-yellow-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Construction className="w-10 h-10 text-yellow-600 dark:text-yellow-500" />
                </div>
                <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">Скоро в {selectedCity}!</h3>
                <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">
                    Мы активно работаем над добавлением университетов этого региона.
                </p>
                <Button onClick={() => setSelectedCity("Алматы")} className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                    Вернуться в Алматы
                </Button>
            </motion.div>
        )}
      </section>
    </main>
  );
}