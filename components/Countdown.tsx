import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // FECHA OBJETIVO: 28 de Febrero 2026 a las 00:00
    const targetDate = new Date('2026-02-28T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Componente de Caja de Tiempo Reutilizable
  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative bg-white w-20 h-24 md:w-28 md:h-32 rounded-2xl shadow-xl border border-rose-100 flex items-center justify-center mb-3 group overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-1 bg-rose-400/30"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-rose-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        
        <span className="text-4xl md:text-6xl font-black text-rose-500 z-10 font-mono tabular-nums">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs font-bold text-rose-300 uppercase tracking-[0.2em]">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/50 relative"
      >
        {/* Icono flotante */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg text-rose-500">
          <Clock size={32} />
        </div>

        <h3 className="text-2xl md:text-4xl font-black text-rose-900 mb-2 mt-4">
          YA QUEDA POQUITITO
        </h3>
        <p className="text-rose-500 font-medium mb-12 flex items-center justify-center gap-2">
          28 de Febrero, 2026 <Heart size={16} fill="currentColor" />
        </p>

        {/* Grid del Contador */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Minutos" />
          
          {/* Segundos con animación de latido */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <TimeBox value={timeLeft.seconds} label="Segundos" />
          </motion.div>
        </div>

        <div className="mt-12 bg-rose-100/50 inline-block px-6 py-3 rounded-full">
          <p className="text-rose-800 text-sm md:text-base font-medium italic">
            "Cada segundo que pasa es un segundo menos para abrazarte para siempre."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;