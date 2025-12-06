// --- ЧАСТЬ 1: НАЧАЛО ФАЙЛА ---

export interface Program {
  name: string;
  degree: "Bachelor" | "Master" | "PhD";
  duration: string;
  language: string;
  price: number;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  description: string;
  rating: number;
  programs: Program[];
  features: string[];
  contacts: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  stats: {
    students: number;
    employmentRate: number;
    minScore: number;
  };
  details: {
    mission: string;
    history: string;
  };
  admissions: {
    deadline: string;
    requirements: string[];
    grants: string;
  };
  international: {
    description: string;
    partners: string[];
  };
  tourUrl?: string;
}

export const universities: University[] = [
  // 1. КБТУ (Технари + Элита)
  {
    id: "kbtu",
    name: "Казахстанско-Британский Технический Университет",
    shortName: "КБТУ",
    city: "Алматы",
    description: "Лидер технического образования в Центральной Азии. КБТУ готовит высококвалифицированных специалистов для нефтегазового сектора, IT, морской индустрии и финансовой сферы. Тесные связи с компаниями-гигантами (КазМунайГаз, Chevron, Tengizchevroil).",
    rating: 4.9,
    programs: [
      { name: "Информационные системы (IT)", degree: "Bachelor", duration: "4 года", language: "Английский", price: 2800000 },
      { name: "Нефтегазовое дело", degree: "Bachelor", duration: "4 года", language: "Английский", price: 2500000 },
      { name: "Финансы и Инвестиции (LSE)", degree: "Bachelor", duration: "4 года", language: "Английский", price: 2800000 },
      { name: "Морская техника и технологии", degree: "Bachelor", duration: "4 года", language: "Английский", price: 2200000 },
      { name: "Анализ данных (Data Science)", degree: "Bachelor", duration: "4 года", language: "Английский", price: 2800000 },
      { name: "Химическая технология", degree: "Bachelor", duration: "4 года", language: "Английский", price: 2100000 },
    ],
    features: ["Общежитие Premium", "Военная кафедра", "Double Degree LSE", "Карьерный центр", "Спортзал"],
    contacts: {
      phone: "+7 (727) 357 42 42",
      email: "info@kbtu.kz",
      website: "kbtu.kz",
      address: "г. Алматы, ул. Толе би 59"
    },
    images: {
      main: "/images/universities/kbtu_front_build.jpg",
      gallery: ["https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000"]
    },
    stats: { students: 4500, employmentRate: 98, minScore: 100 },
    details: {
      mission: "Подготовка высококвалифицированных специалистов с мировым признанием для индустриально-инновационного развития Казахстана.",
      history: "Основан в 2001 году по инициативе Н.А. Назарбаева и Премьер-министра Великобритании Тони Блэра."
    },
    admissions: {
      deadline: "25 августа",
      requirements: ["Сертификат ЕНТ (мин. 100 баллов)", "IELTS 5.5+ (или внутренний тест)", "Профильные предметы: Мат+Физ / Мат+Инф"],
      grants: "Доступны государственные гранты, гранты 'Алтын Белгі', стипендии от КазМунайГаз, Тенгизшевройл и NCOC."
    },
    international: {
      description: "КБТУ — единственный вуз в РК, имеющий аффилированную программу с London School of Economics (LSE). Студенты получают два диплома: КБТУ и Университета Лондона.",
      partners: ["University of London", "Harvard Business School", "Boston University", "Hong Kong Polytechnic"]
    },
    tourUrl: "https://kbtu.kz/3d/index.html"
  },

  // 2. СДУ (Современный кампус)
  {
    id: "sdu",
    name: "Suleyman Demirel University",
    shortName: "СДУ",
    city: "Каскелен",
    description: "Университет с современным Smart-кампусом мирового уровня в пригороде Алматы. Сильнейшая школа программирования (ACM ICPC), педагогики, права и социальных наук. Атмосфера демократии и творчества.",
    rating: 4.7,
    programs: [
      { name: "Computer Science", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1800000 },
      { name: "Математика (Педагогика)", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1500000 },
      { name: "Два иностранных языка", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1500000 },
      { name: "Журналистика", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1600000 },
      { name: "Международные отношения", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1700000 },
      { name: "Право", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1600000 },
    ],
    features: ["Smart-кампус", "Общежитие на территории", "Бесплатная развозка", "Спорткомплекс", "Столовая"],
    contacts: {
      phone: "+7 (727) 307 95 65",
      email: "info@sdu.edu.kz",
      website: "sdu.edu.kz",
      address: "г. Каскелен, ул. Абылай хана 1/1"
    },
    images: {
      main: "/images/universities/photo_5377523080542415757_y.jpg",
      gallery: []
    },
    stats: { students: 8000, employmentRate: 92, minScore: 85 },
    details: {
      mission: "Служение обществу через качественное образование и воспитание.",
      history: "Открыт в 1996 году Президентом Н.А. Назарбаевым и Президентом Турции Сулейманом Демирелем."
    },
    admissions: {
      deadline: "20 августа",
      requirements: ["Сертификат ЕНТ (85+)", "IELTS 5.0+ (или тест SPT)", "Собеседование (для пед. специальностей)"],
      grants: "Государственные гранты, Внутренние гранты по олимпиаде SPT (Sdu Proficiency Test), скидки для призеров олимпиад."
    },
    international: {
      description: "Активная программа академической мобильности Erasmus+ и Mevlana. Более 50 вузов-партнеров.",
      partners: ["Gazi University (Турция)", "Solbridge (Южная Корея)", "University of Silesia (Польша)"]
    },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/milan.jpg&autoLoad=true&title=SDU Campus"
  },
  // --- ЧАСТЬ 2: НАРХОЗ И КАЗНУ ---

  // 3. НАРХОЗ (Экономика + Sustainable)
  {
    id: "narxoz",
    name: "Университет Нархоз",
    shortName: "Нархоз",
    city: "Алматы",
    description: "Ведущий экономический вуз страны, прошедший полную трансформацию. Новый экологичный кампус, фокус на устойчивое развитие, право и бизнес. Современные методы обучения и отсутствие коррупции.",
    rating: 4.5,
    programs: [
      { name: "Экономика", degree: "Bachelor", duration: "4 года", language: "Рус/Каз/Англ", price: 1300000 },
      { name: "Финансы", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1500000 },
      { name: "Юриспруденция", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1300000 },
      { name: "Маркетинг", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1300000 },
      { name: "Цифровой менеджмент", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1400000 },
      { name: "Учет и аудит (ACCA)", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1450000 },
    ],
    features: ["Новый Эко-кампус", "Бассейн", "Коворкинги 24/7", "Общежитие", "Фитнес-центр"],
    contacts: {
      phone: "+7 (727) 377 11 11",
      email: "info@narxoz.kz",
      website: "narxoz.kz",
      address: "г. Алматы, ул. Жандосова 55"
    },
    images: {
      main: "/images/universities/003cdf57-b459-4cfc-a92c-9065541fbf07.webp",
      gallery: []
    },
    stats: { students: 6000, employmentRate: 85, minScore: 70 },
    details: {
      mission: "Подготовка лидеров, способных создавать ценность для бизнеса и общества.",
      history: "Основан в 1963 году как Институт народного хозяйства. В 2016 начал масштабную трансформацию."
    },
    admissions: {
      deadline: "25 августа",
      requirements: ["ЕНТ 70+", "Профильные: Мат/Гео"],
      grants: "Гранты от группы 'Верный Капитал', Именные стипендии Булата Утемуратова (100% покрытие)."
    },
    international: {
      description: "Программы двойного диплома с вузами Великобритании (Coventry) и Франции (La Rochelle).",
      partners: ["Coventry University (UK)", "La Rochelle Business School (France)", "Hof University (Germany)"]
    },
    tourUrl: "https://mir3d.kz/Narxoz_VR/"
  },

  // 4. КАЗНУ (Национальный гигант)
  {
    id: "kaznu",
    name: "КазНУ им. аль-Фараби",
    shortName: "КазНУ",
    city: "Алматы",
    description: "Главный национальный вуз страны, единственный из Казахстана в топ-200 QS. Огромный город-кампус 'Казгуград' со своей инфраструктурой. Фундаментальная наука, медицина, инженерия, гуманитарные науки.",
    rating: 4.8,
    programs: [
      { name: "Международные отношения", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1400000 },
      { name: "Биотехнология", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1100000 },
      { name: "Общая медицина", degree: "Bachelor", duration: "5 лет", language: "Рус/Каз", price: 1600000 },
      { name: "Механика и математика", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1000000 },
      { name: "Востоковедение", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1100000 },
      { name: "Химия органических веществ", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1050000 },
    ],
    features: ["Город-кампус", "Военная кафедра", "Медицинский центр", "Технопарк", "Дворец студентов"],
    contacts: {
      phone: "+7 (727) 377 33 33",
      email: "info@kaznu.kz",
      website: "kaznu.kz",
      address: "г. Алматы, пр. аль-Фараби 71"
    },
    images: {
      main: "/images/universities/20241114143506535_big.webp",
      gallery: []
    },
    stats: { students: 25000, employmentRate: 88, minScore: 95 },
    details: {
      mission: "Формирование кадрового потенциала – интеллектуальной нации для конкурентоспособности страны.",
      history: "Основан в 1934 году. Старейший классический университет республики."
    },
    admissions: {
      deadline: "25 августа",
      requirements: ["ЕНТ 95+", "Профильные предметы"],
      grants: "Самое большое количество государственных грантов в стране. Президентская стипендия."
    },
    international: {
      description: "Лидер по количеству иностранных студентов в Центральной Азии. Глобальный хаб ООН 'Academic Impact'.",
      partners: ["M.V. Lomonosov MSU", "Sorbonne University", "Xi'an Jiaotong University", "Osaka University"]
    },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/library.jpg&autoLoad=true&title=Библиотека КазНУ"
  },
  // --- ЧАСТЬ 3: ПОЛИТЕХ, КИМЭП, МУИТ ---

  // 5. ПОЛИТЕХ (SATBAYEV)
  {
    id: "satbayev",
    name: "Satbayev University (КазНИТУ)",
    shortName: "Satbayev",
    city: "Алматы",
    description: "Старейший и ведущий технический вуз Казахстана. Инженерия, горное дело, металлургия, архитектура и кибернетика. Центр инженерной мысли страны.",
    rating: 4.6,
    programs: [
      { name: "Робототехника и мехатроника", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1000000 },
      { name: "Горное дело", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 950000 },
      { name: "Архитектура", degree: "Bachelor", duration: "5 лет", language: "Рус/Каз", price: 1200000 },
      { name: "Геология и разведка", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 950000 },
      { name: "Космическая техника", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1000000 },
      { name: "Нефтяная инженерия", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1100000 },
    ],
    features: ["Общежитие", "Военная кафедра", "Лаборатории FabLab", "Большая территория", "Технопарк"],
    contacts: {
      phone: "+7 (727) 292 60 25",
      email: "info@satbayev.university",
      website: "satbayev.university",
      address: "г. Алматы, ул. Сатпаева 22"
    },
    images: {
      main: "/images/universities/_793-446.jpg",
      gallery: []
    },
    stats: { students: 12000, employmentRate: 90, minScore: 75 },
    details: {
      mission: "Наука и технологии для устойчивого развития Казахстана.",
      history: "Основан в 1934 году как Казахский горно-металлургический институт."
    },
    admissions: {
      deadline: "25 августа",
      requirements: ["ЕНТ 75+", "Физика/Математика", "Творческий экзамен (для Архитектуры)"],
      grants: "Государственные гранты по техническим специальностям."
    },
    international: {
      description: "Сотрудничество с ведущими техническими вузами мира. Программы стажировок.",
      partners: ["Penn State University (USA)", "Colorado School of Mines", "Politecnico di Torino"]
    },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/bma-1.jpg&autoLoad=true&title=Лаборатория"
  },

  // 6. КИМЭП (Западный стиль)
  {
    id: "kimep",
    name: "Университет КИМЭП",
    shortName: "KIMEP",
    city: "Алматы",
    description: "Университет западного образца в сердце Алматы. Обучение полностью на английском языке. Лидер в области бизнеса, социальных наук, права и медиа.",
    rating: 4.9,
    programs: [
      { name: "Business Administration (Финансы)", degree: "Bachelor", duration: "4 года", language: "Английский", price: 3200000 },
      { name: "International Relations", degree: "Bachelor", duration: "4 года", language: "Английский", price: 3000000 },
      { name: "International Law", degree: "Bachelor", duration: "4 года", language: "Английский", price: 3100000 },
      { name: "Marketing", degree: "Bachelor", duration: "4 года", language: "Английский", price: 3200000 },
      { name: "Accounting and Audit", degree: "Bachelor", duration: "4 года", language: "Английский", price: 3200000 },
    ],
    features: ["Английский язык 100%", "Кампус в центре", "Общежитие", "Библиотека 24/7"],
    contacts: {
      phone: "+7 (727) 270 43 16",
      email: "info@kimep.kz",
      website: "kimep.kz",
      address: "г. Алматы, пр. Абая 2"
    },
    images: {
      main: "/images/universities/comission.jpg",
      gallery: []
    },
    stats: { students: 3500, employmentRate: 96, minScore: 110 },
    details: {
      mission: "Развитие образованных граждан для улучшения качества жизни в Казахстане и регионе.",
      history: "Основан в 1992 году Указом Президента РК."
    },
    admissions: {
      deadline: "20 августа",
      requirements: ["IELTS 6.0+", "Вступительные экзамены", "Аттестат"],
      grants: "Внутренние гранты за академические заслуги (100%, 50%), Гранты для 'Алтын Белгі'."
    },
    international: {
      description: "Самая широкая сеть партнеров по обмену. 160+ вузов по всему миру.",
      partners: ["USA", "Europe", "South Korea", "Singapore"]
    },
    tourUrl: "https://www.kimep.kz/3d-tour/"
  },

  // 7. МУИТ (Главный IT)
  {
    id: "muit",
    name: "Международный IT Университет",
    shortName: "MUIT",
    city: "Алматы",
    description: "Главный IT-вуз страны. Тесное сотрудничество с вендорами и IT-компаниями. Выпускает лучших программистов. Единственный вуз в СНГ с международной аккредитацией ASIIN.",
    rating: 4.8,
    programs: [
      { name: "Computer Science", degree: "Bachelor", duration: "3 года", language: "Английский", price: 1800000 },
      { name: "Кибербезопасность", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1800000 },
      { name: "Big Data Analysis", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1800000 },
      { name: "Электронная журналистика", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1600000 },
      { name: "IT Менеджмент", degree: "Bachelor", duration: "4 года", language: "Английский", price: 1700000 },
    ],
    features: ["Военная кафедра", "3 года обучения (ускоренное)", "IT-хаб", "Общежитие"],
    contacts: {
      phone: "+7 (727) 320 00 00",
      email: "info@iitu.kz",
      website: "iitu.kz",
      address: "г. Алматы, ул. Манаса 34/1"
    },
    images: {
      main: "/images/universities/image_750x_62f348dc73cca.jpg",
      gallery: []
    },
    stats: { students: 5000, employmentRate: 95, minScore: 95 },
    details: {
      mission: "Формирование цифровой элиты Казахстана.",
      history: "Основан в 2009 году при участии Carnegie Mellon University."
    },
    admissions: {
      deadline: "25 августа",
      requirements: ["ЕНТ 95+", "Математика/Информатика", "IELTS 5.5+"],
      grants: "Целевые гранты от IT-компаний (Kaspi, Halyk), Государственные гранты."
    },
    international: {
      description: "Академическая мобильность в США и Европу. Программы двойного диплома.",
      partners: ["Schmalkalden University (Germany)", "Inha University (Korea)", "University of Kuala Lumpur"]
    },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/milan.jpg&autoLoad=true"
  },
  // --- ЧАСТЬ 4: АУЭС, ТУРАН, АБАЙ, МЕД И КОНЕЦ ---

  // 8. АУЭС
  {
    id: "aues",
    name: "Алматинский Университет Энергетики и Связи",
    shortName: "АУЭС",
    city: "Алматы",
    description: "Ведущий вуз в области энергетики, телекоммуникаций и космической инженерии. Сильная практическая база и гарантированное трудоустройство в нацкомпаниях.",
    rating: 4.5,
    programs: [
      { name: "Электроэнергетика", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 950000 },
      { name: "Телекоммуникации", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 950000 },
      { name: "Теплоэнергетика", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 950000 },
      { name: "Космическая техника", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1000000 },
      { name: "Радиотехника", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 950000 },
    ],
    features: ["Военная кафедра", "Общежитие", "Лаборатории Siemens", "Столовая"],
    contacts: {
      phone: "+7 (727) 292 57 40",
      email: "aues@aues.kz",
      website: "aues.kz",
      address: "г. Алматы, ул. Байтурсынова 126"
    },
    images: {
      main: "/images/universities/aad53fe8-2864-4af0-b6d9-0d66a01ba122.jpeg",
      gallery: []
    },
    stats: { students: 6000, employmentRate: 88, minScore: 70 },
    details: {
      mission: "Подготовка инженеров новой формации для энергетики будущего.",
      history: "Основан в 1975 году на базе энергетического факультета Политеха."
    },
    admissions: {
      deadline: "25 августа",
      requirements: ["ЕНТ 70+", "Физика/Математика"],
      grants: "Гос. гранты, Гранты от KEGOC и Самрук-Энерго."
    },
    international: {
      description: "Сотрудничество с мировыми энергохолдингами.",
      partners: ["Siemens", "Schneider Electric", "Huawei"]
    },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg&autoLoad=true"
  },

  // 9. ТУРАН
  {
    id: "turan",
    name: "Университет Туран",
    shortName: "Turan",
    city: "Алматы",
    description: "Инновационно-предпринимательский университет полного цикла. Экономика, право, туризм, психология и киноискусство (Академия Кино).",
    rating: 4.4,
    programs: [
      { name: "Туризм", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 800000 },
      { name: "Режиссура", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1200000 },
      { name: "Психология", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 850000 },
      { name: "Международное право", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 900000 },
      { name: "Операторское искусство", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1200000 },
    ],
    features: ["Бизнес-инкубатор", "Общежитие", "Спорткомплекс", "Киностудия"],
    contacts: {
      phone: "+7 (727) 260 40 00",
      email: "reception@turan-edu.kz",
      website: "turan-edu.kz",
      address: "г. Алматы, ул. Сатпаева 16А"
    },
    images: {
      main: "/images/universities/ob-universitete-oblozhka-scaled.jpg",
      gallery: []
    },
    stats: { students: 4000, employmentRate: 82, minScore: 65 },
    details: { mission: "Обучение предпринимательству и лидерству.", history: "Основан в 1992 году." },
    admissions: { deadline: "25 августа", requirements: ["ЕНТ 65+", "Творческий (для кино)"], grants: "Ректорские гранты 'Туран-Умит'." },
    international: { description: "Обмен в Турцию и Европу.", partners: ["Antalya Bilim University", "University of Applied Sciences Europe"] },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/library.jpg&autoLoad=true"
  },

  // 10. АБАЙ (ПЕД)
  {
    id: "kaznpu",
    name: "КазНПУ имени Абая",
    shortName: "Abai Uni",
    city: "Алматы",
    description: "Первый вуз Казахстана. Главная кузница педагогических кадров. Готовит учителей нового поколения по всем школьным предметам.",
    rating: 4.6,
    programs: [
      { name: "Педагогика и психология", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 800000 },
      { name: "Учитель математики", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 850000 },
      { name: "Учитель английского языка", degree: "Bachelor", duration: "4 года", language: "Английский", price: 900000 },
      { name: "Дефектология", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 850000 },
      { name: "История", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 800000 },
    ],
    features: ["Историческое здание", "Общежитие", "Военная кафедра", "Музей"],
    contacts: {
      phone: "+7 (727) 291 40 55",
      email: "info@kaznpu.kz",
      website: "kaznpu.kz",
      address: "г. Алматы, пр. Достык 13"
    },
    images: {
      main: "/images/universities/img_8293-1024x576.webp",
      gallery: []
    },
    stats: { students: 10000, employmentRate: 98, minScore: 75 },
    details: { mission: "Подготовка педагогов, предвосхищающих будущее.", history: "Основан в 1928 году." },
    admissions: { deadline: "25 августа", requirements: ["ЕНТ 75+", "Педагогический тест"], grants: "Огромное количество гос. грантов." },
    international: { description: "Сотрудничество с ведущими педвузами СНГ и Европы.", partners: ["MSPU (Moscow)", "Sorbonne"] },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg&autoLoad=true"
  },

  // 11. МЕД (АСФЕНДИЯРОВ)
  {
    id: "asfend",
    name: "КазНМУ им. Асфендиярова",
    shortName: "КазНМУ",
    city: "Алматы",
    description: "Ведущий медицинский университет Казахстана. Готовит врачей, фармацевтов и стоматологов. Клинические базы во всех больницах города.",
    rating: 4.8,
    programs: [
      { name: "Общая медицина", degree: "Bachelor", duration: "6 лет", language: "Рус/Каз", price: 1200000 },
      { name: "Стоматология", degree: "Bachelor", duration: "5 лет", language: "Рус/Каз", price: 1500000 },
      { name: "Фармация", degree: "Bachelor", duration: "5 лет", language: "Рус/Каз", price: 1100000 },
      { name: "Педиатрия", degree: "Bachelor", duration: "6 лет", language: "Рус/Каз", price: 1200000 },
      { name: "Общественное здравоохранение", degree: "Bachelor", duration: "4 года", language: "Рус/Каз", price: 1000000 },
    ],
    features: ["Клинические базы", "Симуляционный центр", "Общежитие", "Анатомический музей"],
    contacts: {
      phone: "+7 (727) 338 70 90",
      email: "info@kaznmu.kz",
      website: "kaznmu.kz",
      address: "г. Алматы, ул. Толе би 94"
    },
    images: {
      main: "/images/universities/univer-med.jpg",
      gallery: []
    },
    stats: { students: 11000, employmentRate: 99, minScore: 85 },
    details: { mission: "Сохранение и укрепление здоровья нации.", history: "Основан в 1930 году." },
    admissions: { deadline: "20 августа", requirements: ["ЕНТ 85+", "Биология/Химия", "Психометрический тест"], grants: "Государственные гранты." },
    international: { description: "Медицинские стажировки за рубежом.", partners: ["Seoul National University Hospital", "Charite (Berlin)"] },
    tourUrl: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/milan.jpg&autoLoad=true"
  }
];

// ЭКСПОРТ ФУНКЦИЙ
export async function getUniversities() {
  return universities;
}

export async function getUniversityById(id: string) {
  return universities.find((u) => u.id === id);
}