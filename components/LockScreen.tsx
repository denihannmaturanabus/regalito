
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, PawPrint, Plane } from 'lucide-react';

interface LockScreenProps {
  onUnlock: (input: string) => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === '2026') {
      onUnlock(input);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
      setInput('');
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center p-6 overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/lockscreen.jpg)' }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/20 via-pink-500/10 to-purple-500/20 pointer-events-none" />
      
      {/* Paper Plane Animation */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20], 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-1/4 opacity-40 hidden md:block"
      >
        <Plane size={48} className="text-white" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass max-w-lg w-full p-10 rounded-[3rem] shadow-2xl text-center space-y-8 relative"
      >
        <div className="space-y-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart size={48} className="text-rose-600 fill-rose-500 mx-auto" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-rose-900">
            Feliz San Valentín, mi amor
          </h1>
          <p className="text-rose-800/70 font-medium">
            5 años juntitos y para toda la vida.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
          className="space-y-4"
        >
          <div className="relative">
            <input
              type="password"
              maxLength={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pronto te dare una pista..."
              className="w-full bg-white/60 border-2 border-white/40 rounded-2xl px-6 py-4 text-center text-3xl tracking-[0.3em] font-bold text-rose-900 focus:outline-none focus:ring-4 focus:ring-rose-400/20 transition-all placeholder:tracking-normal placeholder:text-base placeholder:text-rose-400/80"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-rose-300 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            Abrir mi regalo
          </button>
        </motion.form>

        <p className="text-[11px] text-black-800/40 font-semibold uppercase tracking-[0.2em]">
          Ya falta mucho menos
        </p>
      </motion.div>
    </div>
  );
};

export default LockScreen;
