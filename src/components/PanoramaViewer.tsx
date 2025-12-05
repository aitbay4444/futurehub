"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  previewImage: string;
  tourUrl?: string; // Принимаем ссылку на тур
}

export function PanoramaViewer({ previewImage, tourUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Если ссылки нет, ставим красивую библиотеку по умолчанию
  const finalUrl = tourUrl || "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/milan.jpg&autoLoad=true&title=Библиотека&author=FutureCampus";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden group cursor-pointer border-2 border-neutral-200 mt-4 shadow-sm hover:shadow-md transition-all">
            <Image 
                src={previewImage}
                alt="3D Tour Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 blur-[1px] group-hover:blur-0"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-all">
                <Button size="lg" className="text-lg bg-white text-neutral-900 hover:bg-blue-50 hover:text-blue-600 shadow-xl pointer-events-none transition-all">
                    <Globe className="w-5 h-5 mr-2 animate-spin-slow"/> Виртуальный тур 360°
                </Button>
            </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-[95vw] h-[85vh] p-0 border-none bg-black overflow-hidden flex flex-col">
          <div className="absolute top-4 right-4 z-50 flex gap-2">
             {/* Кнопка открыть в новой вкладке (если вдруг iframe заблокируют) */}
             <a href={finalUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full transition-colors backdrop-blur-md" title="Открыть в новом окне">
                    <ExternalLink className="w-6 h-6"/>
                </button>
             </a>
             <button 
                onClick={() => setIsOpen(false)}
                className="bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            >
                <X className="w-6 h-6"/>
            </button>
          </div>
            
            <iframe 
                width="100%" 
                height="100%" 
                allowFullScreen 
                src={finalUrl}
                className="w-full h-full border-none bg-white"
            ></iframe>
      </DialogContent>
    </Dialog>
  );
}