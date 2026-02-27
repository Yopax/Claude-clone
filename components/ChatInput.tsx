import { IconArrowUp, IconAdd, IconDownSmall, IconAudio, IconCheck, IconChevronRight } from "./Icons";
import { useState } from "react";

export default function ChatInput({ 
  onSubmit, 
  placeholder = "¿Cómo puedo ayudarle hoy?",
  value,
  onChange
}: { 
  onSubmit?: (text: string) => void,
  placeholder?: string,
  value?: string,
  onChange?: (text: string) => void
}) {
  // Manejo de estado híbrido (funciona si es controlado desde fuera o por sí mismo)
  const [internalText, setInternalText] = useState("");
  const isControlled = value !== undefined && onChange !== undefined;
  const text = isControlled ? value : internalText;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isControlled) {
      onChange(e.target.value);
    } else {
      setInternalText(e.target.value);
    }
  };

  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const isFilled = text.trim().length > 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isFilled && onSubmit) {
        onSubmit(text);
        if (isControlled) onChange(""); 
        else setInternalText("");
      }
    }
  };

  const handleSend = () => {
    if (isFilled && onSubmit) {
      onSubmit(text);
      if (isControlled) onChange(""); 
      else setInternalText("");
    }
  };

  return (
    <div className="nav-button w-full flex flex-col items-center relative">
      <div className="w-full bg-white border-[0.5px] border-[#1F1E1D]/20 rounded-2xl py-3 px-4 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus-within:shadow-[0_4px_12px_rgba(0,0,0,0.08)] focus-within:border-[#1F1E1D]/40 transition-all min-h-27.75">
        
        <textarea
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="nav-button flex-1 w-full outline-none px-1 text-[15px] text-[#73726C] placeholder-[#73726C] bg-transparent resize-none leading-relaxed"
          style={{ minHeight: "60px" }}
        />
        
        <div className="flex items-center justify-between mt-auto pt-2 relative">
          <button className="text-[#9CA3AF] hover:text-[#141413] transition-colors p-1 rounded-md hover:bg-[#F3F2EC]">
            <IconAdd />
          </button>
          
          <div className="flex items-center space-x-3">
            {/* Selector de Modelo */}
            <div className="relative">
              <button 
                onClick={() => setShowModelDropdown(!showModelDropdown)}
                className="flex items-center space-x-1.5 px-2 py-1.5 rounded-md hover:bg-[#F3F2EC] text-[13.5px] text-[#3D3D3A] transition-colors font-medium"
              >
                <span>Sonnet 4.6</span>
                <IconDownSmall />
              </button>

              {/* Menú Dropdown (Igual al que ya tenías) */}
              {showModelDropdown && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowModelDropdown(false)}></div>
                  <div className="absolute right-0 top-[calc(100%+8px)] w-[320px] bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border-[0.5px] border-[#1F1E1D]/15 p-1.5 z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                    
                    <div className="flex justify-between items-center p-2.5 rounded-lg hover:bg-[#F3F2EC] cursor-pointer transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#141413] font-medium">Opus 4.6</span>
                        <span className="text-[12.5px] text-[#73726C]">Más potente para trabajo ambicioso</span>
                      </div>
                      <span className="text-[11px] text-[#3266AD] border border-[#3266AD]/30 bg-[#3266AD]/5 px-2 py-0.5 rounded-full font-medium">Actualizar</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#F0EEE6] cursor-pointer mt-0.5">
                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#141413] font-medium">Sonnet 4.6</span>
                        <span className="text-[12.5px] text-[#73726C]">Most efficient for everyday tasks</span>
                      </div>
                      <IconCheck className="w-4 h-4 text-[#3266AD]" />
                    </div>

                    <div className="flex justify-between items-center p-2.5 rounded-lg hover:bg-[#F3F2EC] cursor-pointer transition-colors mt-0.5">
                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#141413] font-medium">Haiku 4.5</span>
                        <span className="text-[12.5px] text-[#73726C]">Más rápido para respuestas rápidas</span>
                      </div>
                    </div>

                    <div className="h-px bg-[#1F1E1D]/10 my-1 mx-2"></div>

                    <div className="flex justify-between items-center p-2.5 rounded-lg hover:bg-[#F3F2EC] cursor-pointer transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#141413] font-medium">Pensamiento extendido</span>
                        <span className="text-[12.5px] text-[#73726C]">Pensar más tiempo para tareas complejas</span>
                      </div>
                      <div className="w-9 h-5 bg-[#E5E4E0] rounded-full flex items-center px-0.5">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>

                    <div className="h-px bg-[#1F1E1D]/10 my-1 mx-2"></div>

                    <div className="flex justify-between items-center p-2.5 rounded-lg hover:bg-[#F3F2EC] cursor-pointer transition-colors">
                      <span className="text-[14px] text-[#141413]">Más modelos</span>
                      <IconChevronRight className="w-4 h-4 text-[#73726C]" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {isFilled ? (
              <button onClick={handleSend} className="bg-[#D97757] hover:bg-[#C65B46] text-white p-2 rounded-lg transition-all flex items-center justify-center cursor-pointer shadow-sm animate-fade-in">
                <IconArrowUp />
              </button>
            ) : (
              <button className="text-[#3D3D3A] hover:bg-[#F3F2EC] p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer">
                <IconAudio />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}