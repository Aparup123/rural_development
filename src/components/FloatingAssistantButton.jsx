import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Mic, MicOff, RefreshCw, Globe, Volume2, X, MessageSquare, ChevronUp, ChevronDown } from 'lucide-react';
import { getGeminiResponse } from '../utils/voiceAssistant'; // Import the Gemini API utility

const VoiceAssistantPopup = ({ isOpen, onClose }) => {
  const [answer, setAnswer] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState("en");
  const [speechLanguage, setSpeechLanguage] = useState("en-IN");
  const [isExpanded, setIsExpanded] = useState(false);
  const popupRef = useRef(null);
  
  // List of supported languages
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

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      resetTranscript();
      setQuery("");
      setAnswer("");
      if (listening) {
        SpeechRecognition.stopListening();
      }
    }
  }, [isOpen, listening, resetTranscript]);

  // Language detection
  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
      
      // Language detection function
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
    }
  }, [transcript]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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

  // API call to get response from Gemini
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
      
      // Get current page context (you can customize this)
      const pageContext = document.title || "website";
      
      // Call the Gemini API with detected language
      const response = await getGeminiResponse(
        currentQuery, 
        detectedLanguage || "en", 
        pageContext
      );
      
      setAnswer(response);
      resetTranscript();
    } catch (error) {
      console.error("Error:", error);
      
      // Error messages in different languages
      const errorMessages = {
        en: "Sorry, I encountered an error while processing your request.",
        hi: "क्षमा करें, आपके अनुरोध को संसाधित करते समय मुझे एक त्रुटि मिली।",
        bn: "দুঃখিত, আপনার অনুরোধ প্রক্রিয়া করার সময় আমি একটি ত্রুটির সম্মুখীন হয়েছি।",
        te: "క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేస్తున్నప్పుడు నాకు ఒక లోపం ఎదురైంది.",
        ta: "மன்னிக்கவும், உங்கள் கோரிக்கையை செயலாக்கும் போது எனக்கு ஒரு பிழை ஏற்பட்டது."
      };
      
      setAnswer(errorMessages[detectedLanguage] || errorMessages.en);
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

  // Don't render if not open
  if (!isOpen) return null;

  // Show error if speech recognition not supported
  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="fixed bottom-6 right-6 max-w-sm bg-red-50 border-2 border-red-200 rounded-lg p-4 shadow-lg z-50">
        <div className="flex justify-between items-center mb-2">
          <div className="text-red-600 text-lg font-semibold">Not Supported</div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-700">Your browser doesn't support speech recognition. Please try Chrome or Edge.</p>
      </div>
    );
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      ref={popupRef}
      className={`fixed bottom-6 right-6 rounded-xl shadow-xl bg-gradient-to-br from-green-50 via-amber-50 to-green-50 border border-green-200 transition-all duration-300 z-50 ${
        isExpanded ? 'w-80 md:w-96' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-3 flex justify-between items-center rounded-t-xl">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
            <span className="text-green-700">🎙️</span>
          </div>
          <h2 className="text-lg font-bold">ग्रामीण Connect</h2>
        </div>
        
        <div className="flex items-center">
          <div className="relative group mr-2">
            <button className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 p-1 rounded-full">
              <Globe size={16} />
              <span className="ml-1">{languages.find(l => l.code === speechLanguage)?.flag || '🌐'}</span>
            </button>
            
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center w-full px-3 py-2 text-sm text-left hover:bg-green-50 ${
                    speechLanguage === lang.code ? 'bg-green-100' : ''
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={toggleExpand} 
            className="p-1 hover:bg-green-500 rounded"
            aria-label={isExpanded ? "Minimize" : "Expand"}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>

          <button 
            onClick={onClose} 
            className="p-1 hover:bg-green-500 rounded ml-1"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-4">
        {/* Language detection badge */}
        {detectedLanguage !== "en" && transcript && (
          <div className="mb-3 inline-block px-2 py-1 bg-amber-100 border border-amber-200 rounded-full text-xs text-amber-800 flex items-center">
            <Globe size={12} className="mr-1" />
            Detected: {languages.find(l => l.isoCode === detectedLanguage)?.name || detectedLanguage}
            
            {detectedLanguage !== speechLanguage.split('-')[0] && (
              <button 
                onClick={() => {
                  const matchedLang = languages.find(l => l.isoCode === detectedLanguage);
                  if (matchedLang) changeLanguage(matchedLang.code);
                }}
                className="ml-2 bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-full px-2 py-0.5 text-xs"
              >
                Switch
              </button>
            )}
          </div>
        )}
        
        {/* Chat interface */}
        <div className="mb-4 space-y-3">
          {/* User input display */}
          <div className="bg-white bg-opacity-70 rounded-lg p-3 border border-green-100 shadow-sm">
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <span className="text-green-700 text-xs">👤</span>
              </div>
              <div className="font-medium text-sm text-green-800">You</div>
            </div>
            <p className="text-sm text-gray-700 min-h-8">
              {transcript || query || (listening ? "Listening..." : "Ask me anything...")}
            </p>
            {listening && (
              <div className="mt-1 flex items-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="ml-2 text-xs text-red-600">Listening...</span>
              </div>
            )}
          </div>
          
          {/* Assistant response */}
          {(answer || isLoading) && (
            <div className="bg-green-50 rounded-lg p-3 border border-green-100 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div className="font-medium text-sm text-green-800">Assistant</div>
                </div>
                {answer && (
                  <button 
                    onClick={speakAnswer}
                    className="p-1 rounded-full hover:bg-green-100"
                    title="Read aloud"
                  >
                    <Volume2 size={14} className="text-green-700" />
                  </button>
                )}
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center h-10">
                  <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5 animate-spin border-t-green-500"></div>
                  <span className="ml-2 text-xs text-gray-600">Processing...</span>
                </div>
              ) : (
                <p className="text-sm text-gray-700 whitespace-pre-line">{answer}</p>
              )}
            </div>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex gap-2">
          <button
            onClick={listening ? getAnswer : () => SpeechRecognition.startListening({continuous: true, language: speechLanguage})}
            className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center font-medium text-sm ${
              listening
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {listening ? (
              <>
                <MicOff size={14} className="mr-1" />
                <span>Process</span>
              </>
            ) : (
              <>
                <Mic size={14} className="mr-1" />
                <span>Speak</span>
              </>
            )}
          </button>
          
          <button
            onClick={resetTranscript}
            className="flex-none py-1.5 px-3 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg flex items-center justify-center font-medium text-sm"
            aria-label="Reset"
          >
            <RefreshCw size={14} />
          </button>
        </div>
      </div>
      
      {/* Footer */}
      {!isMicrophoneAvailable && (
        <div className="bg-red-50 p-2 text-center text-xs text-red-600 border-t border-red-100">
          ⚠️ Microphone not available or permission denied
        </div>
      )}
    </div>
  );
};

// Floating button component
const FloatingAssistantButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleAssistant}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-200 hover:scale-105"
        aria-label="Voice Assistant"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageSquare size={24} />
        )}
      </button>
      
      <VoiceAssistantPopup 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default FloatingAssistantButton;