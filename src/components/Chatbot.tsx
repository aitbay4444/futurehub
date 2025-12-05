"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Привет! Я AI-помощник DataHub. Готов ответить на вопросы по поступлению, ценам и грантам! 🎓", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Автоскролл вниз при новом сообщении
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Добавляем сообщение пользователя
    const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 2. Имитация "думания" ИИ (1.5 секунды)
    setTimeout(() => {
      const botResponse = getBotResponse(userMsg.text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  // --- МОЗГИ БОТА (Логика ответов) ---
  const getBotResponse = (text: string) => {
    const t = text.toLowerCase();
    
    if (t.includes("цена") || t.includes("стоит") || t.includes("оплата")) 
      return "Стоимость обучения в топовых вузах (КБТУ, КИМЭП) варьируется от 2.5 до 3.2 млн тг в год. В национальных вузах (КазНУ, Политех) цены ниже — от 950 тыс. тг.";
    
    if (t.includes("грант") || t.includes("бюджет")) 
      return "В 2025 году выделено более 80,000 грантов! Основной упор на технические специальности (IT, Инженерия). Проходной балл на грант обычно от 100+ баллов ЕНТ.";
    
    if (t.includes("кбту")) 
      return "КБТУ — лидер тех. образования. Сильные стороны: IT, Нефтегаз и Финансы. Есть общежитие и военная кафедра. Цена: ~2.8 млн тг.";
    
    if (t.includes("сду") || t.includes("sdu")) 
      return "СДУ находится в Каскелене. Это супер-современный кампус. Сильнейшая школа программирования и педагогики. Есть бесплатная развозка из города.";
    
    if (t.includes("нархоз")) 
      return "Нархоз прошел полную трансформацию. Теперь это крутой эко-кампус. Лидер в Экономике и Праве. Цена доступная: ~1.3 млн тг.";

    if (t.includes("привет") || t.includes("здравствуй"))
      return "Привет! Чем могу помочь? Спрашивай про вузы или цены.";

    return "Интересный вопрос! Для детальной информации рекомендую воспользоваться функцией 'Сравнение' на нашем сайте или оставить заявку в вуз.";
  };

  return (
    <>
      {/* КНОПКА ОТКРЫТИЯ (Плавающая) */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all hover:scale-110"
        >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
        </Button>
        {/* Бейдж уведомления */}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
        )}
      </motion.div>

      {/* ОКНО ЧАТА */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden"
          >
            {/* Хедер */}
            <div className="bg-blue-600 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white">DataHub AI</h3>
                    <p className="text-xs text-blue-100 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Online
                    </p>
                </div>
            </div>

            {/* Сообщения */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-neutral-50 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                            msg.sender === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                
                {/* Анимация печатания */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white border border-neutral-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                    </div>
                )}
            </div>

            {/* Быстрые вопросы (Chips) */}
            <div className="px-4 py-2 bg-neutral-50 flex gap-2 overflow-x-auto no-scrollbar">
                {["Сколько стоит КБТУ?", "Какие есть гранты?", "Сравнить вузы"].map(q => (
                    <button 
                        key={q} 
                        onClick={() => { setInput(q); handleSend(); }} // Сразу отправляем при клике? Нет, лучше вставить в инпут или сразу отправить. Давай сразу отправим для вау-эффекта
                        className="whitespace-nowrap px-3 py-1 bg-white border border-blue-200 text-blue-600 text-xs rounded-full hover:bg-blue-50 transition-colors"
                    >
                        {q}
                    </button>
                ))}
            </div>

            {/* Инпут */}
            <div className="p-4 bg-white border-t border-neutral-100 flex gap-2">
                <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Задайте вопрос..."
                    className="focus-visible:ring-blue-600"
                />
                <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700 shrink-0">
                    <Send className="w-4 h-4" />
                </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}