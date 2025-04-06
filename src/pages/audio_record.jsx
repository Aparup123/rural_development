import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { getGeminiResponse } from '../utils/gemini';
import { Mic, MicOff, RefreshCw, Globe, Volume2 } from 'lucide-react';

export default function VoiceChatBotTest() {
  const [answer, setAnswer] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState("en");
  const [speechLanguage, setSpeechLanguage] = useState("en-IN");
  
  // List of supported languages with more detailed information
  const languages = [
    { code: "en-IN", name: "English", flag: "🇮🇳", sample: "hello world", isoCode: "en" },
    { code: "hi-IN", name: "हिंदी", flag: "🇮🇳", sample: "नमस्ते दुनिया", isoCode: "hi" },
    { code: "bn-IN", name: "বাংলা", flag: "🇮🇳", sample: "ওহে বিশ্ব", isoCode: "bn" },
    { code: "te-IN", name: "తెలుగు", flag: "🇮🇳", sample: "హలో వరల్డ్", isoCode: "te" },
    { code: "ta-IN", name: "தமிழ்", flag: "🇮🇳", sample: "வணக்கம் உலகம்", isoCode: "ta" },
    { code: "mr-IN", name: "मराठी", flag: "🇮🇳", sample: "नमस्कार जग", isoCode: "mr" },
    { code: "gu-IN", name: "ગુજરાતી", flag: "🇮🇳", sample: "હેલો વર્લ્ડ", isoCode: "gu" },
    { code: "kn-IN", name: "ಕನ್ನಡ", flag: "🇮🇳", sample: "ಹಲೋ ವರ್ಲ್ಡ್", isoCode: "kn" },
    { code: "ml-IN", name: "മലയാളം", flag: "🇮🇳", sample: "ഹലോ വേൾഡ്", isoCode: "ml" },
    { code: "pa-IN", name: "ਪੰਜਾਬੀ", flag: "🇮🇳", sample: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨੀਆ", isoCode: "pa" }
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  // More robust language detection
  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
      
      // Improved language detection function
      const detectLanguage = (text) => {
        if (!text || text.trim() === "") return "en";
        
        // Character set mappings for Indian languages
        const langPatterns = [
          { lang: "hi", pattern: /[\u0900-\u097F]/g }, // Hindi (Devanagari)
          { lang: "bn", pattern: /[\u0980-\u09FF]/g }, // Bengali
          { lang: "te", pattern: /[\u0C00-\u0C7F]/g }, // Telugu
          { lang: "ta", pattern: /[\u0B80-\u0BFF]/g }, // Tamil
          { lang: "mr", pattern: /[\u0900-\u097F]/g }, // Marathi (uses Devanagari like Hindi)
          { lang: "gu", pattern: /[\u0A80-\u0AFF]/g }, // Gujarati
          { lang: "kn", pattern: /[\u0C80-\u0CFF]/g }, // Kannada
          { lang: "ml", pattern: /[\u0D00-\u0D7F]/g }, // Malayalam
          { lang: "pa", pattern: /[\u0A00-\u0A7F]/g }, // Punjabi (Gurmukhi)
          { lang: "en", pattern: /[a-zA-Z]/g }         // English (Latin)
        ];
        
        // Count matches for each language pattern
        const langCounts = langPatterns.map(({ lang, pattern }) => {
          const matches = text.match(pattern);
          return {
            lang,
            count: matches ? matches.length : 0,
            density: matches ? matches.length / text.length : 0
          };
        });
        
        // Special case for Marathi vs Hindi (both use Devanagari)
        if (langCounts.find(l => l.lang === "hi").count > 0) {
          // Common Marathi-specific words
          const marathiWords = ["आहे", "माझा", "तुझा", "मराठी", "महाराष्ट्र"];
          if (marathiWords.some(word => text.includes(word))) {
            return "mr";
          }
        }
        
        // Get language with highest character density
        const detected = langCounts.sort((a, b) => b.density - a.density)[0];
        
        // If density is too low, default to English
        return detected.density > 0.1 ? detected.lang : "en";
      };
      
      const detected = detectLanguage(transcript);
      setDetectedLanguage(detected);
      
      // Automatically switch recognition language if clear detection
      const matchedLang = languages.find(l => l.isoCode === detected);
      if (matchedLang && detected !== "en") {
        console.log(`Detected ${matchedLang.name} (${matchedLang.code})`);
        // Uncomment to auto-switch language:
        // setSpeechLanguage(matchedLang.code);
      }
    }
  }, [transcript]);

  // Text-to-speech function
  const speakAnswer = () => {
    if (!answer) return;
    
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(answer);
      
      // Match language code for speech synthesis
      const langCode = languages.find(l => l.code === speechLanguage)?.isoCode || 'en';
      utterance.lang = langCode;
      
      // Get available voices
      const voices = window.speechSynthesis.getVoices();
      
      // Try to find a voice for the detected language
      const voice = voices.find(v => v.lang.startsWith(langCode)) || 
                   voices.find(v => v.lang.startsWith('en')); // Fallback to English
      
      if (voice) {
        utterance.voice = voice;
      }
      
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Text-to-speech error:", error);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg text-center">
        <div className="text-red-600 text-xl font-semibold mb-2">Speech Recognition Not Supported</div>
        <p className="text-gray-700">Your browser doesn't support speech recognition features. Please try using Chrome or Edge.</p>
      </div>
    );
  }

  const getAnswer = async () => {
    try {
      SpeechRecognition.stopListening();
      setIsLoading(true);
      const currentQuery = transcript || query;
      setQuery(currentQuery);
      
      if (!currentQuery.trim()) {
        setIsLoading(false);
        return;
      }
      
      const response = await getGeminiResponse(currentQuery);
      setAnswer(response);
      resetTranscript();
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Sorry, I encountered an error while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  const changeLanguage = (langCode) => {
    setSpeechLanguage(langCode);
    resetTranscript();
    if (listening) {
      SpeechRecognition.stopListening();
      // Restart listening with new language after a brief delay
      setTimeout(() => {
        SpeechRecognition.startListening({continuous: true, language: langCode});
      }, 300);
    }
  };

  // For debugging language detection
  const debugInfo = {
    transcript,
    detectedLanguage,
    speechLanguage
  };

  return (
    <div className="max-w-xl mx-auto my-8 overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-green-50 via-amber-50 to-green-50 border border-green-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/40/40" 
            alt="Rural connect" 
            className="w-10 h-10 rounded-full border-2 border-white mr-3"
          />
          <h2 className="text-xl font-bold">ग्रामीण Connect</h2>
        </div>
        
        <div className="relative group">
          <button className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 py-1 px-3 rounded-full">
            <Globe size={16} />
            <span className="ml-1">{languages.find(l => l.code === speechLanguage)?.flag || '🌐'}</span>
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-green-50 ${
                  speechLanguage === lang.code ? 'bg-green-100' : ''
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
                <span>{lang.name}</span>
                <span className="ml-auto opacity-60 text-xs">({lang.code.split('-')[0]})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        {/* Language detection badge */}
        {detectedLanguage !== "en" && transcript && (
          <div className="mb-4 inline-block px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-sm text-amber-800 flex items-center">
            <Globe size={14} className="mr-1" />
            Detected: {languages.find(l => l.isoCode === detectedLanguage)?.name || detectedLanguage}
            
            {detectedLanguage !== speechLanguage.split('-')[0] && (
              <button 
                onClick={() => {
                  const matchedLang = languages.find(l => l.isoCode === detectedLanguage);
                  if (matchedLang) changeLanguage(matchedLang.code);
                }}
                className="ml-2 bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-full px-2 py-0.5 text-xs"
              >
                Switch to {languages.find(l => l.isoCode === detectedLanguage)?.name || detectedLanguage}
              </button>
            )}
          </div>
        )}
        
        {/* Chat interface */}
        <div className="mb-6 space-y-4">
          {/* User input display */}
          <div className="bg-white bg-opacity-70 rounded-lg p-4 border border-green-100 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <span className="text-green-700">👤</span>
              </div>
              <div className="font-medium text-green-800">You</div>
              <div className="ml-auto text-xs text-gray-500">
                {languages.find(l => l.code === speechLanguage)?.name || "English"}
              </div>
            </div>
            <p className="text-gray-700 min-h-8">
              {transcript || query || "Your query will appear here..."}
            </p>
            {listening && (
              <div className="mt-2 flex items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="ml-2 text-sm text-red-600">Listening in {languages.find(l => l.code === speechLanguage)?.name}...</span>
              </div>
            )}
          </div>
          
          {/* Assistant response */}
          {(answer || isLoading) && (
            <div className="bg-green-50 rounded-lg p-4 border border-green-100 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mr-2">
                    <span className="text-white">🤖</span>
                  </div>
                  <div className="font-medium text-green-800">Assistant</div>
                </div>
                {answer && (
                  <button 
                    onClick={speakAnswer}
                    className="p-1 rounded-full hover:bg-green-100"
                    title="Read aloud"
                  >
                    <Volume2 size={16} className="text-green-700" />
                  </button>
                )}
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center h-12">
                  <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6 animate-spin border-t-green-500"></div>
                  <span className="ml-2 text-sm text-gray-600">Processing...</span>
                </div>
              ) : (
                <p className="text-gray-700 whitespace-pre-line">{answer}</p>
              )}
            </div>
          )}
        </div>
        
        {/* Controls */}
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <button
            onClick={listening ? getAnswer : () => SpeechRecognition.startListening({continuous: true, language: speechLanguage})}
            className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center font-medium ${
              listening
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {listening ? (
              <>
                <MicOff size={18} className="mr-2" />
                Stop & Process
              </>
            ) : (
              <>
                <Mic size={18} className="mr-2" />
                Start Listening
              </>
            )}
          </button>
          
          <button
            onClick={resetTranscript}
            className="flex-1 py-2 px-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg flex items-center justify-center font-medium"
          >
            <RefreshCw size={18} className="mr-2" />
            Reset
          </button>
        </div>
        
        {/* Language examples - helpful for testing */}
        <div className="mt-6 bg-white bg-opacity-50 rounded-lg p-3 border border-green-100">
          <p className="text-sm font-medium text-green-800 mb-2">Language Examples:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {languages.map((lang) => (
              <div 
                key={lang.code} 
                className="text-xs p-2 bg-white rounded border border-green-100 cursor-pointer hover:bg-green-50"
                onClick={() => {
                  setQuery(lang.sample);
                  setDetectedLanguage(lang.isoCode);
                }}
              >
                <div className="font-medium">{lang.name}</div>
                <div className="text-gray-600">{lang.sample}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-green-800 bg-opacity-10 p-3 text-center text-xs text-green-800 border-t border-green-100">
        <p>Rural Development Initiative Voice Assistant | {new Date().getFullYear()}</p>
        {!isMicrophoneAvailable && (
          <p className="mt-1 text-red-600">⚠️ Microphone not available or permission denied</p>
        )}
      </div>
      
      {/* Debug panel - uncomment for testing */}
      {/* <div className="p-3 bg-gray-100 border-t border-gray-200">
        <details className="text-xs">
          <summary className="cursor-pointer font-mono">Debug Info</summary>
          <pre className="mt-2 p-2 bg-gray-800 text-green-400 rounded overflow-x-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </details>
      </div> */}
    </div>
  );
}