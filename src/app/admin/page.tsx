"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Eye, MousePointerClick, TrendingUp, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* --- ВЕРХНЯЯ ПАНЕЛЬ (NAVBAR) --- */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
                <span className="font-bold text-gray-900">KBTU Dashboard</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-2">PRO Plan</span>
            </div>
            <div className="flex items-center gap-4">
                <Bell className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Rector&background=0D8ABC&color=fff" alt="User" />
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* --- ЗАГОЛОВОК --- */}
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Обзор статистики</h1>
                <p className="text-gray-500 mt-1">Данные за последние 30 дней</p>
            </div>
            <Link href="/">
                <Button variant="outline">Выйти на сайт</Button>
            </Link>
        </div>

        {/* --- КАРТОЧКИ (KPI) --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Просмотры профиля</CardTitle>
                    <Eye className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">45,231</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1"/> +20.1% к прошлому месяцу
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Заявки (Лиды)</CardTitle>
                    <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,203</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1"/> +15% конверсия
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Добавили в сравнение</CardTitle>
                    <MousePointerClick className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3,450</div>
                    <p className="text-xs text-gray-500 mt-1">Чаще всего сравнивают с: МУИТ</p>
                </CardContent>
            </Card>
            <Card className="bg-blue-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-blue-100">Доход с грантов</CardTitle>
                    <span className="font-bold">₸</span>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Prognosis</div>
                    <p className="text-xs text-blue-100 mt-1">Аналитика на основе заявок</p>
                </CardContent>
            </Card>
        </div>

        {/* --- ГРАФИК (ИМИТАЦИЯ ЧЕРЕЗ CSS) И ЗАЯВКИ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* ГРАФИК */}
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Динамика интереса абитуриентов</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 flex items-end justify-between gap-2 mt-4 px-2">
                        {/* Столбики графика */}
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 100].map((h, i) => (
                            <div key={i} className="w-full bg-blue-100 rounded-t-sm hover:bg-blue-200 transition-all relative group h-full flex items-end">
                                <div 
                                    style={{ height: `${h}%` }} 
                                    className="w-full bg-blue-600 rounded-t-sm relative"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h * 12}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400 uppercase">
                        <span>Янв</span><span>Фев</span><span>Март</span><span>Апр</span><span>Май</span><span>Июнь</span>
                        <span>Июль</span><span>Авг</span><span>Сен</span><span>Окт</span><span>Ноя</span><span>Дек</span>
                    </div>
                </CardContent>
            </Card>

            {/* СПИСОК ЗАЯВОК (CRM) */}
            <Card>
                <CardHeader>
                    <CardTitle>Новые заявки (CRM)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { name: "Алихан С.", faculty: "IT (CS)", time: "5 мин", status: "Новый" },
                            { name: "Мадина К.", faculty: "Экономика", time: "12 мин", status: "Обработан" },
                            { name: "Ержан Б.", faculty: "Нефтегаз", time: "1 час", status: "Новый" },
                            { name: "Диана М.", faculty: "Менеджмент", time: "2 часа", status: "Отказ" },
                            { name: "Санжар Т.", faculty: "IT (Cyber)", time: "3 часа", status: "Новый" },
                        ].map((lead, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                <div>
                                    <p className="font-bold text-sm text-gray-900">{lead.name}</p>
                                    <p className="text-xs text-gray-500">{lead.faculty}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        lead.status === "Новый" ? "bg-green-100 text-green-700" :
                                        lead.status === "Обработан" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"
                                    }`}>
                                        {lead.status}
                                    </span>
                                    <p className="text-[10px] text-gray-400 mt-1">{lead.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full mt-6" variant="outline">Показать все заявки</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </main>
  );
}