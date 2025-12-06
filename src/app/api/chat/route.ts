import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // ИНСТРУКЦИЯ ДЛЯ ИИ (SYSTEM PROMPT)
    const systemPrompt = `
      Ты — AI-консультант портала FutureCampus (Единый каталог вузов Казахстана).
      Твоя цель — помогать абитуриентам выбирать вуз, рассказывать про гранты и цены.
      
      Базовые знания о вузах (используй их):
      - КБТУ: IT, Нефтегаз, цена ~2.8 млн, Алматы.
      - СДУ: Программирование, Педагогика, цена ~1.8 млн, Каскелен.
      - Нархоз: Экономика, Право, цена ~1.3 млн, Алматы.
      - КазНУ: Национальный лидер, многопрофильный, ~1.4 млн.
      - МУИТ: IT-вуз, 3 года обучения, ~1.8 млн.
      - КИМЭП: Английский язык, Бизнес, дорогой (~3 млн).
      
      Отвечай кратко, вежливо, используй смайлики. Если не знаешь точную цифру, давай примерный диапазон.
      Не придумывай несуществующие вузы.
    `;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Понял! Я готов помогать абитуриентам FutureCampus. Жду вопросов!" }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("🔥 ОШИБКА AI:", error); // <-- ВОТ ЭТО ДОБАВЬ
    return NextResponse.json({ error: "Error processing request" }, { status: 500 });
  }
}