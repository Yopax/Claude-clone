import ChatInput from "./ChatInput";
import { IconClaude, IconCodeBracket, IconGraduationCap, IconPencil, IconCoffee, IconLightbulb } from "./Icons";

export default function WelcomeScreen({ onSendMessage }: { onSendMessage: (text: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-3xl mx-auto px-4 mt-[-5vh] animate-fade-in-up">
      {/* Etiqueta superior */}
      <div className="flex items-center space-x-1 text-[13px] text-[#73726C] bg-[#f0eee6] rounded-md px-3 py-1 mb-8">
        <span>Plan gratuito</span>
        <span className="mx-1">·</span>
        <button className="hover:underline ml-1 hover:text-[#141413] transition-colors cursor-pointer underline">Actualizar</button>
      </div>

      {/* Saludo Principal */}
      <div className="flex items-center space-x-3 mb-8">
        <IconClaude className="w-8 h-8 text-[#D97757]" />
        <h1 className="text-[32px] font-serif text-[#141413] font-medium tracking-tight">
          Buenas tardes, Darlhy
        </h1>
      </div>

      {/* Input de Chat adaptado al centro */}
      <div className="w-full mb-6">
        <ChatInput onSubmit={onSendMessage} placeholder="¿Cómo puedo ayudarle hoy?" />
      </div>

      {/* Chips de Sugerencias */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <Chip icon={<IconCodeBracket className="w-4 h-4" />} label="Código" onClick={() => onSendMessage("Ayúdame a escribir código")} />
        <Chip icon={<IconGraduationCap className="w-4 h-4" />} label="Aprender" onClick={() => onSendMessage("Ayúdame a aprender un nuevo tema")} />
        <Chip icon={<IconPencil className="w-4 h-4" />} label="Escribir" onClick={() => onSendMessage("Ayúdame a redactar un texto")} />
        <Chip icon={<IconCoffee className="w-4 h-4" />} label="Vida personal" onClick={() => onSendMessage("Consejos de vida personal")} />
        <Chip icon={<IconLightbulb className="w-4 h-4" />} label="Selección de Claude" onClick={() => onSendMessage("Sorpréndeme con tu mejor selección")} />
      </div>
    </div>
  );
}

function Chip({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center space-x-2 px-3 py-2 bg-transparent border-[0.5px] border-[#1F1E1D]/20 rounded-[10px] hover:bg-[#F3F2EC] transition-colors text-[14px] text-[#3D3D3A] cursor-pointer"
    >
      <span className="text-[#73726C]">{icon}</span>
      <span>{label}</span>
    </button>
  );
}