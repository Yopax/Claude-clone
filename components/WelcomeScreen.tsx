import { useState } from "react";
import ChatInput from "./ChatInput";
import { IconClaude, IconCodeBracket, IconGraduationCap, IconPencil, IconCoffee, IconLightbulb, IconClose, IconChevronRight } from "./Icons";

// Datos actualizados: Dividimos el prompt en "short" (lo que se lee en la lista) y "full" (lo que va al textarea)
const suggestionsData = {
  codigo: {
    id: "codigo",
    label: "Código",
    icon: <IconCodeBracket className="w-4 h-4" />,
    prompts:[
      { short: "Desarrolla revisiones de código para aumentar mi velocidad", full: "Revisa este código y sugiere mejoras para optimizar su rendimiento y legibilidad..." },
      { short: "Desafíame con ejercicios de programación cada vez más difíciles", full: "¡Hola, Claude! ¿Podrías desafíame con ejercicios de programación cada vez más difíciles? Si necesitas más información de mi parte, hazme 1 o 2 preguntas clave de..." },
      { short: "Diseñar esquemas de base de datos", full: "Ayúdame a diseñar un esquema de base de datos relacional robusto y escalable para..." },
      { short: "Diseñar sistemas de registro", full: "Diseña la arquitectura para un sistema de logging y monitoreo (registros) distribuido..." },
      { short: "Desarrollar estrategias de integración", full: "Propón una estrategia de CI/CD para un monorepo usando GitHub Actions..." }
    ]
  },
  aprender: {
    id: "aprender",
    label: "Aprender",
    icon: <IconGraduationCap className="w-4 h-4" />,
    prompts:[
      { short: "Explicar física cuántica de forma sencilla", full: "Explícame los conceptos básicos de la física cuántica como si tuviera 10 años..." }, 
      { short: "Resumir la historia del Imperio Romano", full: "Haz un resumen detallado pero fácil de leer sobre el auge y caída del Imperio Romano..." }
    ]
  },
  escribir: {
    id: "escribir",
    label: "Escribir",
    icon: <IconPencil className="w-4 h-4" />,
    prompts:[
      { short: "Redactar un correo profesional", full: "Ayúdame a redactar un correo persuasivo y profesional dirigido a un cliente importante..." }
    ]
  },
  vida: {
    id: "vida",
    label: "Vida personal",
    icon: <IconCoffee className="w-4 h-4" />,
    prompts:[
      { short: "Crear un plan de dieta semanal", full: "Crea un plan de dieta equilibrado para una semana incluyendo listas de supermercado..." }
    ]
  },
  seleccion: {
    id: "seleccion",
    label: "Selección de Claude",
    icon: <IconLightbulb className="w-4 h-4" />,
    prompts:[
      { short: "Sorpréndeme con un dato histórico", full: "Cuéntame un evento histórico fascinante y muy poco conocido por la mayoría de la gente..." }
    ]
  }
};

export default function WelcomeScreen({ onSendMessage }: { onSendMessage: (text: string) => void }) {
  const [activeChipId, setActiveChipId] = useState<string | null>(null);
  
  // Estados para controlar el texto del ChatInput
  const [userText, setUserText] = useState("");
  const [previewText, setPreviewText] = useState("");

  const activeData = activeChipId ? suggestionsData[activeChipId as keyof typeof suggestionsData] : null;

  return (
    // CAMBIO CLAVE: Eliminado 'justify-center' y usado 'pt-[12vh]'. 
    // Esto fija el inicio en la parte superior, evitando el "salto" visual cuando la tarjeta se abre abajo.
    <div className="nav-button flex flex-col items-center w-full h-full max-w-3xl mx-auto px-4 pt-[22vh] animate-fade-in-up">
      
      {/* Etiqueta superior */}
      <div className="flex items-center space-x-1 text-[13px] text-[#73726C] bg-[#f0eee6] rounded-md px-3 py-1 mb-8">
        <span>Plan gratuito</span>
        <span className="mx-1">·</span>
        <button className="hover:underline hover:text-[#141413] transition-colors cursor-pointer">Actualizar</button>
      </div>

      {/* Saludo Principal */}
      <div className="flex items-center space-x-3 mb-8">
        <IconClaude className="w-[34px] h-[34px] text-[#D97757]" />
        <h1 className="text-[36px] font-serif text-[#3D3D3A] font-medium tracking-tight">
          Reflexiones del atardecer
        </h1>
      </div>

      {/* Input de Chat Controlado */}
      <div className="w-full mb-4">
        <ChatInput 
          onSubmit={onSendMessage} 
          placeholder="¿Cómo puedo ayudarle hoy?" 
          value={previewText || userText} 
          onChange={(val) => {
            setUserText(val); // Si el usuario teclea, guardamos su texto
            setPreviewText(""); // Y borramos la previsualización del hover
          }}
        />
      </div>

      <div className="w-full relative min-h-[250px]">
        {activeData ? (
          // --- TARJETA EXPANDIDA ---
          <div className="w-full bg-white border-[0.5px] border-[#1F1E1D]/20 rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-2 text-[14px] text-[#73726C]">
                {activeData.icon}
                <span className="font-medium">{activeData.label}</span>
              </div>
              <button 
                onClick={() => setActiveChipId(null)} 
                className="text-[#9CA3AF] hover:text-[#141413] transition-colors p-1"
              >
                <IconClose />
              </button>
            </div>
            
            {/* Lista de Prompts con Hover Efecto */}
            <ul className="flex flex-col">
              {activeData.prompts.map((prompt, index) => (
                <li 
                  key={index}
                  onClick={() => {
                    onSendMessage(prompt.full);
                    setPreviewText(""); // Limpiamos al enviar
                  }}
                  onMouseEnter={() => {
                    if (!userText) setPreviewText(prompt.full); // Solo previsualiza si el usuario no ha escrito nada
                  }}
                  onMouseLeave={() => setPreviewText("")} // Se limpia al quitar el mouse
                  className={`group px-4 py-3.5 text-[14.5px] text-[#3D3D3A] hover:bg-[#F3F2EC] cursor-pointer transition-colors flex justify-between items-center ${index !== 0 ? 'border-t border-[#1F1E1D]/10' : ''}`}
                >
                  <span>{prompt.short}</span>
                  <IconChevronRight className="w-4 h-4 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // --- CHIPS DE SUGERENCIAS CON ANIMACIÓN FADE-IN-UP ---
          <div className="flex flex-wrap items-center justify-center gap-2.5 animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
            {Object.values(suggestionsData).map((item) => (
              <Chip 
                key={item.id}
                icon={item.icon} 
                label={item.label} 
                onClick={() => setActiveChipId(item.id)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Chip({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="nav-button flex items-center space-x-2 px-2 py-1 bg-[#FAF9F5] border-[0.5px] border-[#1F1E1D]/15 rounded-md hover:bg-[#F0EEE6] transition-colors text-[14px] text-[#3D3D3A] cursor-pointer"
    >
      <span className="text-[#73726C]">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}