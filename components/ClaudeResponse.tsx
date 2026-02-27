import { useState, useEffect } from "react";
import AppContainer from "./AppContainer";
import { IconCopy, IconThumbsUp, IconThumbsDown, IconReload, IconThinking } from "./Icons";

// Añadimos onOpenArtifact a las props
export default function ClaudeResponse({ onOpenArtifact }: { onOpenArtifact?: () => void }) {
  const fullText = "Aquí tienes un Card Component con estética editorial oscura y brutalista. Características:\n\n• 3 variantes de color con barra superior animada\n• Tipografía contrastante: Playfair Display + Space Mono\n• Micro-interacciones: borde iluminado, flecha deslizante.\n• Grid responsive que se adapta al contenido.";

  const [step, setStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 2000);
      return () => clearTimeout(timer);
    }
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 600);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setStep(3), 300); 
        }
      }, 20); 
      return () => clearInterval(typingInterval);
    }
  }, [step]);

  return (
    <div className="flex flex-col w-full">
      {step === 0 && (
        <div className="flex flex-col space-y-4 animate-pulse mb-6">
          <IconThinking />
          <div className="flex flex-col space-y-4 pl-2.25">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D97757]"></div>
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D97757] shrink-0"></div>
              <span className="text-[14.5px] text-[#73726C] italic font-serif">
                Thinking deeply, stand by...
              </span>
            </div>
          </div>
        </div>
      )}

      {step >= 1 && (
        <div className="animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
          {/* PASAMOS LA FUNCIÓN AQUÍ */}
          <AppContainer onOpenArtifact={onOpenArtifact} />
        </div>
      )}
      
      {step >= 2 && (
        <div className="mt-5 mb-3 text-[15.5px] text-[#141413] font-serif leading-relaxed whitespace-pre-line min-h-12">
          {displayedText}
          {step === 2 && (
            <span className="inline-block w-1.5 h-4 ml-0.5 -mb-0.5 bg-[#D97757] animate-pulse"></span>
          )}
        </div>
      )}
      
      {step >= 3 && (
        <div className="flex items-center space-x-0.5 mb-8 animate-fade-in" style={{ animationDuration: '0.5s' }}>
          <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]"><IconThumbsUp /></button>
          <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]"><IconThumbsDown /></button>
          <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]"><IconCopy /></button>
          <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]"><IconReload /></button>
        </div>
      )}
    </div>
  );
}