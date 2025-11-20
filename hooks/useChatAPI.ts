// hooks/useChatAPI.ts
import { useState, useCallback } from 'react';

interface Message {
  text: string;
  type: 'user' | 'bot' | 'error';
}

interface ChatResponse {
  response: string;
  success: boolean;
  error: string | null;
}

export function useChatAPI() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm Suhail's agent. Ask me anything about Suhail Khan!", type: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = { text: message, type: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('https://shaheer-agent-api-sk.vercel.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data: ChatResponse = await response.json();
      
      const botMessage: Message = {
        text: data.response,
        type: data.success ? 'bot' : 'error'
      };
      
      setMessages(prev => [...prev, botMessage]);
      return data;
    } catch (error) {
      const errorMessage: Message = {
        text: 'Sorry, there was an error connecting to the server.',
        type: 'error'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      { text: "Hello! I'm Suhail's agent. Ask me anything about Suhail Khan!", type: 'bot' }
    ]);
  }, []);

  return { messages, isLoading, sendMessage, clearMessages };
}