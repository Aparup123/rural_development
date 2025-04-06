// utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey); // Replace with your actual key

export async function getGeminiResponse(userInput) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(userInput);
  const response = await result.response;
  return response.text();
}
