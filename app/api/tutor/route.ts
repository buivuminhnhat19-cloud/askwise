import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const languageInstructions = {
  en: "Always answer in English.",
  vi: "Luôn trả lời bằng tiếng Việt.",
  zh: "始终使用中文回答。",
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const prompt =
      typeof body.prompt === "string" ? body.prompt.trim() : "";

    const language: "en" | "vi" | "zh" =
      body.language === "vi" || body.language === "zh"
        ? body.language
        : "en";

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const response = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5.6",
  instructions: `
You are AskWise AI Tutor.

${languageInstructions[language]}

Help students learn rather than simply doing their work for them.
Explain clearly, use the student's level when available, and ask guiding
questions when that would support learning.
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
      { error: "Unable to contact the AI tutor." },
      { status: 500 }
    );
  }
}