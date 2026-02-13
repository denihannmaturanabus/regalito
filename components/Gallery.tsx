
import React from 'react';
import { motion } from 'framer-motion';
import { PHOTOS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="flex gap-6 px-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
      {PHOTOS.map((photo, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
          className="min-w-[280px] md:min-w-[320px] bg-white p-3 rounded-sm shadow-xl flex-shrink-0"
        >
          <div className="aspect-[4/5] overflow-hidden bg-zinc-200 mb-4">
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-1">
            <p className="text-zinc-800 font-mono text-sm font-bold truncate">{photo.caption}</p>
            <p className="text-zinc-400 font-mono text-[10px] uppercase">{photo.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
