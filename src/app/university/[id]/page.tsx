import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getUniversityById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyModal } from "@/components/ApplyModal";
import { PanoramaViewer } from "@/components/PanoramaViewer";
import { MapPin, Phone, Globe, Mail, ArrowLeft, Users, Trophy, GraduationCap, Calendar, FileCheck, Plane, Building2 } from "lucide-react";

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const university = await getUniversityById(id);

  if (!university) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20 transition-colors duration-300">
      {/* Хедер с картинкой */}
      <div className="relative h-[450px] w-full">
        <Image
          src={university.images.main}
          alt={university.name}
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="absolute top-8 left-4 md:left-8 text-white/80 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Назад к поиску
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex gap-2 mb-4">
                 <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none text-lg px-4 py-1">
                    {university.shortName}
                  </Badge>
                  <Badge variant="outline" className="text-white border-white/50 text-lg px-4 py-1">
                    {university.rating} ★
                  </Badge>
              </div>
             
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                {university.name}
              </h1>
              <div className="flex items-center text-white/90 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                {university.city}
              </div>
            </div>
            
            <ApplyModal universityName={university.shortName} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <Card className="shadow-xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors duration-300">
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="about" className="w-full">
              {/* НАВИГАЦИЯ */}
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 bg-neutral-100 dark:bg-neutral-800">
                <TabsTrigger value="about" className="text-md py-3 dark:data-[state=active]:bg-neutral-700 dark:text-neutral-300">Об университете</TabsTrigger>
                <TabsTrigger value="programs" className="text-md py-3 dark:data-[state=active]:bg-neutral-700 dark:text-neutral-300">Программы</TabsTrigger>
                <TabsTrigger value="admissions" className="text-md py-3 dark:data-[state=active]:bg-neutral-700 dark:text-neutral-300">Поступление</TabsTrigger>
                <TabsTrigger value="international" className="text-md py-3 dark:data-[state=active]:bg-neutral-700 dark:text-neutral-300">Сотрудничество</TabsTrigger>
              </TabsList>

              {/* 1. ОБ УНИВЕРСИТЕТЕ */}
              <TabsContent value="about" className="space-y-8 animate-in fade-in-50">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                             <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400"/> Описание
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">{university.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700">
                             <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Миссия</h3>
                             <p className="text-sm text-neutral-600 dark:text-neutral-400">{university.details.mission}</p>
                        </div>
                         <div className="bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700">
                             <h3 className="font-bold text-neutral-900 dark:text-white mb-2">История</h3>
                             <p className="text-sm text-neutral-600 dark:text-neutral-400">{university.details.history}</p>
                        </div>
                    </div>

                    {/* 3D ТУР */}
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">3D-тур по кампусу</h2>
                        <PanoramaViewer previewImage={university.images.gallery[0] || university.images.main} tourUrl={university.tourUrl} />
                    </div>
                  </div>

                  {/* Сайдбар */}
                  <div className="space-y-6">
                     <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-300">Контакты</h3>
                         <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-600 dark:text-blue-400"/> {university.contacts.phone}</div>
                            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-600 dark:text-blue-400"/> {university.contacts.email}</div>
                            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400"/> {university.contacts.address}</div>
                            <a href={`https://${university.contacts.website}`} target="_blank" className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                <Globe className="w-4 h-4"/> {university.contacts.website}
                            </a>
                        </div>
                     </div>

                     <Card className="border-none shadow-none bg-neutral-50 dark:bg-neutral-800/50">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-700 pb-3">
                                <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-2"><Users className="w-4 h-4"/> Студентов</span>
                                <span className="font-bold dark:text-white">{university.stats.students}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-700 pb-3">
                                <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-2"><Trophy className="w-4 h-4"/> Рейтинг</span>
                                <span className="font-bold text-yellow-600 dark:text-yellow-500">{university.rating}/5</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-2"><GraduationCap className="w-4 h-4"/> Мин. балл</span>
                                <span className="font-bold dark:text-white">{university.stats.minScore}</span>
                            </div>
                        </CardContent>
                     </Card>
                  </div>
                </div>
              </TabsContent>

              {/* 2. ПРОГРАММЫ */}
              <TabsContent value="programs" className="space-y-6 animate-in fade-in-50">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Академические программы</h2>
                  <div className="grid gap-4">
                    {university.programs.map((prog, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row justify-between items-center p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
                        <div>
                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{prog.name}</h4>
                        <div className="flex gap-3 text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                            <Badge variant="secondary" className="dark:bg-neutral-800 dark:text-neutral-300">{prog.degree}</Badge>
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {prog.duration}</span>
                            <span className="flex items-center gap-1"><Globe className="w-3 h-3"/> {prog.language}</span>
                        </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {new Intl.NumberFormat('ru-KZ').format(prog.price)} ₸
                        </div>
                        <div className="text-xs text-neutral-400">стоимость в год</div>
                        </div>
                    </div>
                    ))}
                  </div>
              </TabsContent>

              {/* 3. ПОСТУПЛЕНИЕ */}
              <TabsContent value="admissions" className="space-y-8 animate-in fade-in-50">
                 <div className="grid md:grid-cols-2 gap-8">
                     <div>
                         <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                             <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400"/> Требования
                         </h2>
                         <ul className="space-y-3">
                             {university.admissions.requirements.map((req, i) => (
                                 <li key={i} className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                                     <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold">{i+1}</div>
                                     {req}
                                 </li>
                             ))}
                         </ul>
                     </div>
                     <div className="space-y-6">
                         <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                             <h3 className="font-bold text-yellow-900 dark:text-yellow-400 mb-2 flex items-center gap-2">
                                 <Calendar className="w-5 h-5"/> Сроки подачи
                             </h3>
                             <p className="text-yellow-800 dark:text-yellow-200">Крайний срок приема документов: <span className="font-bold">{university.admissions.deadline}</span></p>
                         </div>
                         <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/30">
                             <h3 className="font-bold text-green-900 dark:text-green-400 mb-2 flex items-center gap-2">
                                 <Trophy className="w-5 h-5"/> Гранты и скидки
                             </h3>
                             <p className="text-green-800 dark:text-green-200">{university.admissions.grants}</p>
                         </div>
                     </div>
                 </div>
              </TabsContent>

              {/* 4. СОТРУДНИЧЕСТВО */}
              <TabsContent value="international" className="animate-in fade-in-50">
                  <div className="bg-blue-600 dark:bg-blue-900 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
                      <div className="relative z-10">
                          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                              <Plane className="w-6 h-6"/> Международные программы
                          </h2>
                          <p className="text-lg opacity-90 max-w-2xl">{university.international.description}</p>
                      </div>
                      <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Вузы-партнеры</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {university.international.partners.map((partner, i) => (
                          <div key={i} className="h-32 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 text-center font-bold text-neutral-600 dark:text-neutral-300 hover:shadow-md transition-all">
                              {partner}
                          </div>
                      ))}
                  </div>
              </TabsContent>

            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}