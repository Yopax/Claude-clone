import { IconArrowUp, IconAdd, IconDownSmall } from "./Icons";
import { useState } from "react";

export default function ChatInput({ 
  onSubmit, 
  placeholder = "Reply to Claude" 
}: { 
  onSubmit?: (text: string) => void,
  placeholder?: string 
}) {
  const [text, setText] = useState("");
  const isFilled = text.trim().length > 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isFilled && onSubmit) {
        onSubmit(text);
        setText("");
      }
    }
  };

  const handleSend = () => {
    if (isFilled && onSubmit) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className="nav-button w-full flex flex-col items-center">
      <div className="w-full bg-white border-[0.5px] border-[#1F1E1D]/30 rounded-2xl py-3 px-4 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus-within:shadow-lg focus-within:border-[#1F1E1D]/50 transition-all min-h-[111px]">
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 w-full outline-none px-1 text-[15px] text-[#141413] placeholder-[#73726C] bg-transparent resize-none leading-relaxed"
          style={{ minHeight: "60px" }}
        />
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <button className="text-[#9CA3AF] hover:text-[#141413] transition-colors p-1 rounded-md hover:bg-[#F3F2EC]">
            <IconAdd />
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1.5 text-[13.5px] text-[#141413] font-serif hover:text-[#141413] transition-colors font-medium">
              <span>Sonnet 4.6 Extendido</span>
              <IconDownSmall />
            </button>
            <button 
              onClick={handleSend}
              disabled={!isFilled}
              className={`${isFilled ? 'bg-[#D97757] hover:bg-[#C65B46]' : 'bg-[#E5E5E5] opacity-50'} p-2 rounded-lg transition-all flex items-center justify-center cursor-pointer disabled:cursor-default`}
            >
              <IconArrowUp />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}