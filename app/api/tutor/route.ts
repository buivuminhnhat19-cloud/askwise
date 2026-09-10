import OpenAI from "openai";
import { NextResponse } from "next/server";

const languageInstructions = {
  en: "Always respond in English.",
  vi: "Luôn trả lời bằng tiếng Việt.",
  zh: "始终使用中文回答。",
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const prompt =
      typeof body.prompt === "string"
        ? body.prompt.trim()
        : "";

    const language: keyof typeof languageInstructions =
      body.language === "vi" || body.language === "zh"
        ? body.language
        : "en";

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey,
    });

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6",
      instructions: `
You are AskWise AI Tutor.

${languageInstructions[language]}

Your job is to help students learn, not simply complete their homework.

Guidelines:
- Explain ideas clearly.
- Encourage the student to think.
- Use hints and guiding questions when useful.
- Match the student's learning level when it is provided.
- Do not pretend to know something you are uncertain about.
- Do not switch languages unless the user explicitly asks.
      `,
      input: prompt,
    });

    return NextResponse.json({
      answer: response.output_text,
      language,
    });
  } catch (error) {
    console.error("AskWise Tutor API error:", error);

    return NextResponse.json(
      {
        error:
          "The AI tutor could not process your request.",
      },
      { status: 500 }
    );
  }
}