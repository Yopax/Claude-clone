import AppContainer from "./AppContainer";
import {  IconCopy, IconRefresh, IconClaude, IconThumbsUp, IconThumbsDown, IconReload, IconThinking } from "./Icons";

export default function ClaudeResponse() {
  return (
    <div className="flex flex-col w-full">
      {/* Contenedor Artefacto/App (Opcional, según el orden que prefieras) */}
      <AppContainer />
      
      {/* 1. Texto de respuesta de Claude */}
      <div className="mt-5 mb-3 text-[15.5px] text-[#141413] font-serif leading-relaxed">
        Heres a sprint planning template with a standard agenda. Review and hit Create page
        when it looks right—you can add specific ticket assignments during the meeting.
      </div>
      
      {/* 2. Iconos de Interacción */}
      <div className="flex items-center space-x-0.5 mb-8">
        <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]">
          <IconThumbsUp />
        </button>
        <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]">
          <IconThumbsDown />
        </button>
        <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]">
          <IconCopy />
        </button>
        <button className="p-1 text-[#9CA3AF] hover:text-[#374151] rounded-md transition-colors cursor-pointer hover:bg-[#F0EEE6]">
          <IconReload />
        </button>
      </div>

      {/* 3. Estado "Pensando" (Thinking state) tal cual la imagen */}
      <div className="flex flex-col space-y-4">
        {/* Icono de IA (Starburst) */}
        <IconThinking />
        
        {/* Contenedor de los puntos alineados exactamente al centro de la estrella (pl-[9px]) */}
        <div className="flex flex-col space-y-4 pl-2.25">
          {/* Primer punto */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#D97757]"></div>
          
          {/* Segundo punto + Texto */}
          <div className="flex items-center space-x-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D97757] shrink-0"></div>
            <span className="text-[14.5px] text-[#73726C] italic font-serif">
              Thinking deeply, stand by...
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}