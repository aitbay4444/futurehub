"use client";

import Link from "next/link";
import Image from "next/image";
import { University } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, Plus, Check } from "lucide-react";
import { useCompareStore } from "@/lib/store";
import { toast } from "sonner";

interface Props {
  university: University;
}

export function UniversityCard({ university }: Props) {
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useCompareStore();
  const isSelected = isInCompare(university.id);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault(); 
    if (isSelected) {
      removeFromCompare(university.id);
      toast.info(`${university.shortName} удален из сравнения`);
    } else {
      addToCompare(university.id);
      toast.success(`${university.shortName} добавлен к сравнению`, {
          description: "Перейдите на страницу сравнения, чтобы увидеть детали."
      });
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      {/* ИЗОБРАЖЕНИЕ */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={university.images.main}
          alt={university.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm z-10">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-bold text-sm text-neutral-900 dark:text-white">{university.rating}</span>
        </div>
        
        {/* КНОПКА СРАВНЕНИЯ */}
        <button 
            onClick={toggleCompare}
            className={`absolute top-2 left-2 p-2 rounded-md shadow-sm transition-all z-10 ${
                isSelected 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-white/90 dark:bg-neutral-900/90 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800"
            }`}
            title="Добавить к сравнению"
        >
            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2 text-neutral-500 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700">
             {university.shortName}
          </Badge>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            {university.city}
          </div>
        </div>
        <h3 className="font-bold text-lg leading-tight text-neutral-900 dark:text-white line-clamp-2 min-h-[3rem]">
          {university.name}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-3 mb-3">
          {university.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {university.features.slice(0, 2).map((feature) => (
            <span key={feature} className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full text-neutral-600 dark:text-neutral-300">
              {feature}
            </span>
          ))}
           {university.features.length > 2 && (
             <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full text-neutral-600 dark:text-neutral-300">
              +{university.features.length - 2}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto flex gap-2">
        <Link href={`/university/${university.id}`} className="w-full">
          <Button className="w-full bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 group-hover:pl-6 transition-all">
            Подробнее <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}