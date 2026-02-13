
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LockScreen from './components/LockScreen';
import MainExperience from './components/MainExperience';
import { PASSWORD_CORRECT } from './constants';

const App: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      // @ts-ignore
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      // @ts-ignore
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleUnlock = (input: string) => {
    if (input === PASSWORD_CORRECT) {
      triggerConfetti();
      setIsLocked(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#fff5f7] selection:bg-rose-200">
      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.div
            key="lock-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50"
          >
            <LockScreen onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.div
            key="main-experience"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <MainExperience />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
