"use client";
import { useState, useRef, useEffect } from "react";
import type React from "react";

import { useChatAPI } from "@/hooks/useChatAPI";
import Image from "next/image";

export default function ModernNeonChatbot() {
  const { messages, isLoading, sendMessage } = useChatAPI();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (): Promise<void> => {
    if (!inputValue.trim()) return;

    const message: string = inputValue;
    setInputValue("");
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mb-4 w-16 h-16 bg-black border-2 border-cyan-400 text-cyan-400 rounded-full shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center hover:bg-cyan-400/10 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.1)"
            : "0 0 20px rgba(34, 211, 238, 0.4)",
        }}
      >
        {isOpen ? (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="animate-slideUp bg-black rounded-2xl w-80 h-96 flex flex-col overflow-hidden border-2 border-cyan-400/30 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 40px rgba(34, 211, 238, 0.3), inset 0 0 40px rgba(34, 211, 238, 0.05)",
          }}
        >
          {/* Header */}
          <div
            className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-4 border-b border-cyan-400/20"
            style={{
              background:
                "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
              boxShadow: "inset 0 1px 0 rgba(34, 211, 238, 0.2)",
            }}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 p-0.5"
                style={{
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
                }}
              >
                <Image
                  src="/chatbot_profile.jpg"
                  alt="Suhail Khan"
                  width={48}
                  height={48}
                  className="w-full h-full rounded-full object-cover bg-gray-800"
                />
              </div>
              <div>
                <h3
                  className="font-bold text-cyan-400 text-lg"
                  style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.8)" }}
                >
                  Suhail Agent
                </h3>
                <p className="text-xs text-gray-300">
                  Ask me anything about Suhail Agent
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-900 to-black">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`animate-fadeIn flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border border-cyan-400/30"
                      : message.type === "error"
                      ? "bg-gradient-to-r from-red-600 to-pink-600 text-white border border-red-400/30"
                      : "bg-gray-800/80 text-gray-100 border border-gray-600/30 backdrop-blur-sm"
                  }`}
                  style={{
                    boxShadow:
                      message.type === "user"
                        ? "0 0 15px rgba(34, 211, 238, 0.3)"
                        : message.type === "error"
                        ? "0 0 15px rgba(239, 68, 68, 0.3)"
                        : "0 0 10px rgba(75, 85, 99, 0.3)",
                  }}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div
                  className="bg-gray-800/80 text-gray-100 border border-gray-600/30 backdrop-blur-sm px-4 py-3 rounded-2xl"
                  style={{ boxShadow: "0 0 10px rgba(75, 85, 99, 0.3)" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                        style={{ boxShadow: "0 0 5px rgba(34, 211, 238, 0.8)" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                        style={{
                          animationDelay: "0.1s",
                          boxShadow: "0 0 5px rgba(34, 211, 238, 0.8)",
                        }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                        style={{
                          animationDelay: "0.2s",
                          boxShadow: "0 0 5px rgba(34, 211, 238, 0.8)",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-cyan-300">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-black border-t border-cyan-400/20">
            <div className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-900/80 border border-gray-600/50 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-sm text-gray-100 placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                style={{
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                }}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-400/30"
                style={{
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gradient-to-r from-black via-gray-900 to-black border-t border-cyan-400/10">
            <p className="text-xs text-center text-gray-400">
              Made by{" "}
              <span
                className="font-bold text-cyan-400"
                style={{ textShadow: "0 0 8px rgba(34, 211, 238, 0.6)" }}
              >
                Suhail khan
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
