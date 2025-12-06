"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Привет! Я AI-помощник FutureCampus. Готов ответить на вопросы по поступлению, ценам и грантам! 🎓", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Автоскролл вниз
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // --- НОВАЯ ФУНКЦИЯ ОТПРАВКИ (С API) ---
  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Добавляем сообщение юзера
    const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input; // Сохраняем текст для отправки
    setInput(""); // Очищаем поле
    setIsTyping(true); // Включаем анимацию печатания

    try {
      // 2. Отправляем запрос на НАШ сервер (который пойдет в Google)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();

      if (data.response) {
        setMessages((prev) => [
          ...prev, 
          { id: Date.now() + 1, text: data.response, sender: "bot" }
        ]);
      } else {
        throw new Error("No response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Фолбэк, если интернет упал или ключ не работает
      setMessages((prev) => [
        ...prev, 
        { id: Date.now() + 1, text: "Извините, сейчас высокая нагрузка на сервер AI. Попробуйте позже. 😔", sender: "bot" }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* КНОПКА ОТКРЫТИЯ */}
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
      </motion.div>

      {/* ОКНО ЧАТА */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden"
          >
            {/* Хедер */}
            <div className="bg-blue-600 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white">FutureCampus AI</h3>
                    <p className="text-xs text-blue-100 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Online
                    </p>
                </div>
            </div>

            {/* Сообщения */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-neutral-50 dark:bg-neutral-950 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                            msg.sender === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white rounded-bl-none shadow-sm'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                
                {/* Анимация печатания */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                    </div>
                )}
            </div>

            {/* Инпут */}
            <div className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 flex gap-2">
                <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Задайте вопрос..."
                    className="focus-visible:ring-blue-600 dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
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