"use client";

import { useState } from "react";
import MainNavigation from "@/components/MainNavigation";
import ChatTitlebar from "@/components/ChatTitlebar";
import ChatInput from "@/components/ChatInput";
import UserMessage from "@/components/UserMessage";
import ClaudeResponse from "@/components/ClaudeResponse";
import WelcomeScreen from "@/components/WelcomeScreen";
import ArtifactPanel from "@/components/ArtifactPanel"; // Importamos el Panel

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [isArtifactOpen, setIsArtifactOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", content: text }]);
  };

  return (
    <div className="flex h-screen bg-[#FAF9F5] font-sans text-[#141413] overflow-hidden">
      <MainNavigation />
      <main className="flex-1 flex h-full relative overflow-hidden">
        <div
          className={`flex flex-col h-full relative transition-all duration-300 ease-in-out ${isArtifactOpen ? "w-1/2 min-w-100" : "w-full"}`}
        >
          {messages.length > 0 && (
            <div className="animate-fade-in">
              <ChatTitlebar />
            </div>
          )}

          {messages.length === 0 ? (
            <div className="flex-1 overflow-y-auto">
              <WelcomeScreen onSendMessage={handleSendMessage} />
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 pb-32 pt-8 animate-fade-in-up">
                <div
                  className={`${isArtifactOpen ? "max-w-full" : "max-w-3xl"} mx-auto w-full space-y-8 transition-all duration-300`}
                >
                  {messages.map((msg, index) =>
                    msg.role === "user" ? (
                      <UserMessage key={index} text={msg.content} />
                    ) : null,
                  )}

                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <ClaudeResponse
                      onOpenArtifact={() => setIsArtifactOpen(true)}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 pt-10 pb-9.75 px-4 sm:px-6 md:px-12 pointer-events-none bg-linear-to-t from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent">
                <div
                  className={`${isArtifactOpen ? "max-w-full" : "max-w-3xl"} mx-auto w-full pointer-events-auto transition-all duration-300`}
                >
                  <ChatInput
                    onSubmit={handleSendMessage}
                    placeholder="Reply to Claude"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        {isArtifactOpen && (
          <div className="w-1/2 h-full flex shrink-0">
            <ArtifactPanel onClose={() => setIsArtifactOpen(false)} />
          </div>
        )}
      </main>
    </div>
  );
}
