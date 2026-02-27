import React from "react";

function CardExampleOne() {
  return (
    <div className="flex-1 overflow-y-auto p-8 md:p-12">
      <div className="max-w-3xl mx-auto w-full">
        <p className="text-[#8F8F8F] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
          Componente — Tarjeta
        </p>
        <h1 className="text-[#8F8F8F] text-5xl font-serif mb-12 tracking-tight">
          Card Component
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="bg-[#111111] border-t-2 border-[#ECA013] p-6 hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
            <p className="text-[#ECA013] text-[10px] font-mono tracking-widest uppercase mb-4">
              Diseño
            </p>
            <h2 className="text-white text-2xl font-serif mb-3 tracking-tight">
              Arquitectura del Caos
            </h2>
            <p className="text-[#8F8F8F] text-[13px] font-mono mb-8 leading-relaxed">
              Explorando los limites entre el orden y la entropía en sistemas
              visuales complejos.
            </p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-[#555] border border-[#333] px-2 py-1 text-[10px] font-mono uppercase tracking-wider">
                Editorial
              </span>
              <span className="text-[#555] text-[10px] font-mono group-hover:text-white transition-colors tracking-wider">
                LEER MÁS →
              </span>
            </div>
          </div>
          <div className="bg-[#111111] border-t-2 border-[#16C59E] p-6 hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
            <p className="text-[#16C59E] text-[10px] font-mono tracking-widest uppercase mb-4">
              Tecnología
            </p>
            <h2 className="text-white text-2xl font-serif mb-3 tracking-tight">
              Máquinas que Sueñan
            </h2>
            <p className="text-[#8F8F8F] text-[13px] font-mono mb-8 leading-relaxed">
              Inteligencia artificial generando experiencias que desafian la
              percepción humana.
            </p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-[#555] border border-[#333] px-2 py-1 text-[10px] font-mono uppercase tracking-wider">
                Futuro
              </span>
              <span className="text-[#555] text-[10px] font-mono group-hover:text-white transition-colors tracking-wider">
                LEER MÁS →
              </span>
            </div>
          </div>

          <div className="bg-[#111111] border-t-2 border-[#D820B4] p-6 hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
            <p className="text-[#D820B4] text-[10px] font-mono tracking-widest uppercase mb-4">
              Cultura
            </p>
            <h2 className="text-white text-2xl font-serif mb-3 tracking-tight">
              El Ruido es Música
            </h2>
            <p className="text-[#8F8F8F] text-[13px] font-mono mb-8 leading-relaxed">
              Cómo el sonido experimental redefine los bordes del arte
              contemporáneo.
            </p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-[#555] border border-[#333] px-2 py-1 text-[10px] font-mono uppercase tracking-wider">
                Sonido
              </span>
              <span className="text-[#555] text-[10px] font-mono group-hover:text-white transition-colors tracking-wider">
                LEER MÁS →
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-[#444] text-[10px] font-mono uppercase tracking-[0.2em]">
          Hover sobre las cards para ver las interacciones
        </div>
      </div>
    </div>
  );
}

export default CardExampleOne;
