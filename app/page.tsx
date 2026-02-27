"use client";

import { useState } from "react";
import MainNavigation from "@/components/MainNavigation";
import ChatTitlebar from "@/components/ChatTitlebar";
import ChatInput from "@/components/ChatInput";
import UserMessage from "@/components/UserMessage";
import ClaudeResponse from "@/components/ClaudeResponse";
import WelcomeScreen from "@/components/WelcomeScreen"; // Tu nuevo componente

export default function Home() {
  // Estado inicial simulando una base de datos de mensajes
  const[messages, setMessages] = useState<{role: string, content: string}[]>([]);

  // Función que captura el evento "Enviar" desde ChatInput o WelcomeScreen
  const handleSendMessage = (text: string) => {
    // Al setear el array, la interfaz automáticamente ocultará el Welcome y renderizará el chat.
    setMessages(prev => [...prev, { role: "user", content: text }]);
    // ¡AQUÍ ES DONDE LOS DEVS BACKEND HARÍAN SU POST REQUEST A LA API DE LA IA!
  };

  return (
    <div className="flex h-screen bg-[#FAF9F5] font-sans text-[#141413] overflow-hidden">
      <MainNavigation />
      
      <main className="flex-1 flex flex-col h-full relative">
        {/* Título solo visible si ya empezó la charla */}
        {messages.length > 0 && (
          <div className="animate-fade-in">
            <ChatTitlebar />
          </div>
        )}
        
        {/* LÓGICA DE CONDICIÓN PRINCIPAL */}
        {messages.length === 0 ? (
          <div className="flex-1 overflow-y-auto">
            <WelcomeScreen onSendMessage={handleSendMessage} />
          </div>
        ) : (
          <>
            {/* Área de Chat (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 pb-32 pt-8 animate-fade-in-up">
              <div className="max-w-3xl mx-auto w-full space-y-8">
                
                {/* Mapeo de Historial Real */}
                {messages.map((msg, index) => (
                  msg.role === "user" ? (
                    <UserMessage key={index} text={msg.content} />
                  ) : null 
                ))}
                
                {/* Simulador estático de respuesta de IA */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <ClaudeResponse />
                </div>
                
              </div>
            </div>

            {/* Input Fijo Inferior */}
            <div className="absolute bottom-0 left-0 right-0 pt-10 pb-9.75 px-4 sm:px-6 md:px-12 pointer-events-none bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent">
              <div className="max-w-3xl mx-auto w-full pointer-events-auto animate-fade-in-up">
                <ChatInput onSubmit={handleSendMessage} placeholder="Reply to Claude" />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}