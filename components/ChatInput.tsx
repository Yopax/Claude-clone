import { IconPlus, IconArrowUp, IconChevronDown, IconAdd, IconDownSmall } from "./Icons";

export default function ChatInput() {
  return (
    <div className="nav-button w-full flex flex-col items-center">
      <div className="w-full bg-white border-[0.5px] border-[#1F1E1D]/30 rounded-2xl py-3 px-4 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus-within:shadow-lg transition-all min-h-[111px]">
        
        {/* Área de texto superior */}
        <textarea
          placeholder="Reply to Claude"
          className="flex-1 w-full outline-none px-1 text-[15px] text-[#141413] placeholder-[#73726C] bg-transparent resize-none leading-relaxed"
          style={{ minHeight: "60px" }}
        />
        
        {/* Barra de herramientas inferior */}
        <div className="flex items-center justify-between mt-auto pt-2">
          {/* Botón de adjuntar (Izquierda) */}
          <button className="text-[#9CA3AF] hover:text-[#141413] transition-colors p-1 rounded-md hover:bg-[#F3F2EC]">
            <IconAdd />
          </button>
          
          {/* Controles de modelo y enviar (Derecha) */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1.5 text-[13.5px] text-[#141413] font-serif hover:text-[#141413] transition-colors font-medium">
              <span>Sonnet 4.5</span>
              <IconDownSmall />
            </button>
            <button className="bg-[#C65B46] hover:bg-[#A64C39] text-white p-2 rounded-lg transition-colors flex items-center justify-center">
              <IconArrowUp />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}