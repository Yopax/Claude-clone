import { IconEye, IconCodeBracket, IconRefresh, IconClose } from "./Icons";
import CardExampleOne from "./MockData.tsx/CardExampleOne";

export default function ArtifactPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full w-full bg-[#faf9f5] border-l-[0.5px] border-[#dad8d4] animate-fade-in z-20 overflow-hidden">
      
      {/* Header (Top bar) */}
      <div className="flex items-center justify-between px-3 py-2 border-b-[0.5px] border-[#dad8d4] bg-white">
        
        {/* Pestañas (Preview / Code) */}
        <div className="flex items-center bg-[#F3F2EC] p-0.5 rounded-lg border-[0.5px] border-[#1F1E1D]/10">
          <button className="flex items-center space-x-2 px-3 py-1 bg-white shadow-sm rounded-md text-[13px] font-medium text-[#141413]">
            <IconEye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1 rounded-md text-[13px] font-medium text-[#73726C] hover:text-[#141413] transition-colors cursor-pointer">
            <IconCodeBracket className="w-4 h-4" />
            <span>Code</span>
          </button>
        </div>
        
        {/* Título central */}
        <div className="text-[13px] text-[#73726C] font-mono hidden md:block">
          Card component · JSX
        </div>

        {/* Acciones de la derecha */}
        <div className="flex items-center space-x-0.5">
          <button className="flex items-center justify-center border-[0.5px] border-[#1F1E1D]/20 rounded-md px-3 py-1 text-[13px] font-medium mr-2 hover:bg-[#F3F2EC] transition-colors cursor-pointer text-[#3D3D3A]">
            Copiar <IconChevronDown className="w-3 h-3 ml-1" />
          </button>
          <button className="p-1.5 text-[#9CA3AF] hover:text-[#141413] rounded-md transition-colors cursor-pointer"><IconRefresh /></button>
          <button onClick={onClose} className="p-1.5 text-[#9CA3AF] hover:text-[#141413] rounded-md transition-colors cursor-pointer ml-1"><IconClose /></button>
        </div>
      </div>

      <CardExampleOne />
    </div>
  );
}

// Icono pequeño de chevron para el botón "Copiar"
const IconChevronDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);