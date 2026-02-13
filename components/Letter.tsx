import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RefreshCcw, HeartHandshake } from 'lucide-react';

const Letter = () => {
  // =====================================================================
  // 👇👇👇 ZONA DE EDICIÓN: ESCRIBE TU CARTA AQUÍ DENTRO 👇👇👇
  // Mantén las comillas invertidas ` ` al principio y al final.
  // Usa "Enter" normal para saltar de línea.
  // =====================================================================
  const fullText = `Hola mi vida,

a

a

a
Te amo infinito.`;
  // 👆👆👆 FIN DE LA CARTA
  // =====================================================================

  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Se activa al ver el 30%

  // Lógica de Máquina de Escribir (Versión Mejorada)
  useEffect(() => {
    // Solo arranca si el componente es visible y aún no termina de escribir
    if (isInView && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        // Añade la siguiente letra basada en el largo actual
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50); // Velocidad: 50ms por letra (ajusta si quieres más rápido/lento)

      return () => clearTimeout(timeout);
    }
  }, [isInView, displayedText, fullText]);

  const handleReplay = () => {
    setDisplayedText('');
  };

  return (
    <section ref={ref} className="py-24 px-6 relative flex justify-center bg-gradient-to-br from-rose-100 via-pink-200 to-rose-100">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-white max-w-2xl w-full p-8 md:p-12 rounded-lg shadow-2xl shadow-rose-400/40 border-2 border-rose-200 relative overflow-hidden"
      >
        {/* Barra superior de color */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-400 via-rose-500 to-red-400"></div>

        {/* Encabezado */}
        <div className="mb-10 flex justify-between items-end border-b-2 border-rose-100 pb-4">
          <div>
            <span className="block text-sm font-black text-rose-500 uppercase tracking-widest mb-1">DE: TU NOVIO</span>
            <span className="block text-sm font-bold text-rose-400 uppercase tracking-widest">PARA: EL AMOR DE MI VIDA</span>
          </div>
          <HeartHandshake className="text-rose-400" size={40} />
        </div>

        {/* Cuerpo de la Carta */}
        <div className="min-h-[300px] font-serif text-xl text-rose-950 leading-relaxed whitespace-pre-line">
          {displayedText}
          {/* Cursor parpadeante */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-6 bg-red-600 ml-1 align-middle rounded-full"
          />
        </div>

        {/* Botón de repetir */}
        <div className="mt-10 pt-6 border-t border-rose-100 flex justify-end">
          {displayedText.length === fullText.length && (
            <button 
              onClick={handleReplay}
              className="flex items-center gap-2 text-sm font-bold text-rose-500 hover:text-red-600 transition-colors uppercase tracking-widest bg-rose-50 px-4 py-2 rounded-full cursor-pointer"
            >
              <RefreshCcw size={16} /> Leer otra vez
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Letter;