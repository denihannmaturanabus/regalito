
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Coffee, Heart, MessageSquare, MapPin } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Code: <MessageSquare size={20} />,
  Monitor: <Camera size={20} />,
  Heart: <Heart size={20} />
};

const Timeline: React.FC = () => {
  return (
    <div className="space-y-16 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-100 via-rose-300 to-rose-100 hidden md:block rounded-full" />
      
      {TIMELINE_DATA.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.8 }}
          className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Year Marker */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20 bg-white border-4 border-rose-200 p-2 rounded-full hidden md:flex items-center justify-center text-rose-500 shadow-lg">
            {IconMap[item.icon] || <Heart size={20} fill="currentColor" />}
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-rose-100/50 border border-rose-50 group hover:border-rose-300 transition-all duration-500 transform hover:-translate-y-2">
              <span className="text-rose-500 font-black text-lg mb-2 block">{item.year}</span>
              <h4 className="text-2xl font-extrabold mb-4 text-rose-900 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-rose-800/70 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </div>
          <div className="hidden md:block w-1/2" />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
