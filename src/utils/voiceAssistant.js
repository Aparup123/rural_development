//src/utils/voiceAssistant.js
import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


/**
 * Get multilingual response from Gemini API
 * @param {string} userInput - User's voice/text query
 * @param {string} language - Detected language code (e.g., 'en', 'hi')
 * @param {string} context - Additional context (e.g. current page)
 * @returns {Promise<string>} - Response text
 */
export async function getGeminiResponse(userInput, language = 'en', context = '') {
  try {
    // Choose the appropriate model based on complexity
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Create a system prompt that instructs the model to respond in the detected language
    const systemPrompt = language !== 'en' 
      ? `You are a helpful assistant for rural Indian users. The user is speaking in ${getLanguageName(language)}. 
         Respond in the same language (${language}) in a simple, clear way that's accessible to rural users.
         Context: ${context}`
      : `You are a helpful assistant for rural Indian users. Respond in English in a simple, clear way.
         Context: ${context}`;
    
    // Combine the system prompt with the user input
    const prompt = `${systemPrompt}\n\nUser query: ${userInput}`;
    
    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    
    // Return appropriate error message in the detected language
    if (language === 'hi') {
      return "माफ़ कीजिए, मुझे आपका जवाब देने में समस्या हो रही है। कृपया फिर से प्रयास करें।";
    } else if (language === 'ta') {
      return "மன்னிக்கவும், உங்கள் கேள்விக்கு பதிலளிப்பதில் எனக்கு சிக்கல் ஏற்பட்டுள்ளது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.";
    } else if (language === 'te') {
      return "క్షమించండి, మీ ప్రశ్నకు సమాధానం ఇవ్వడంలో నాకు సమస్య ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి.";
    } else if (language === 'bn') {
      return "দুঃখিত, আপনার প্রশ্নের উত্তর দিতে আমার সমস্যা হচ্ছে। অনুগ্রহ করে আবার চেষ্টা করুন।";
    } else {
      return "Sorry, I'm having trouble answering your question. Please try again.";
    }
  }
}

/**
 * Helper function to get full language name from code
 */
function getLanguageName(code) {
  const languageMap = {
    'en': 'English',
    'hi': 'Hindi',
    'bn': 'Bengali',
    'te': 'Telugu',
    'ta': 'Tamil',
    'mr': 'Marathi',
    'gu': 'Gujarati',
    'kn': 'Kannada',
    'ml': 'Malayalam',
    'pa': 'Punjabi'
  };
  
  return languageMap[code] || 'Unknown';
}

/**
 * Check if the API key is configured properly
 * @returns {boolean} - Whether the API key is valid
 */
export function isApiConfigured() {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
  return apiKey && apiKey.length > 10 && apiKey !== "YOUR_API_KEY";
}