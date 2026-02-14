import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, X, ZoomIn, Camera } from 'lucide-react';
import Countdown from './Countdown';
import Letter from './Letter';
import TulipBouquet from './TulipBouquet';

const MainExperience: React.FC = () => {
  // ESTADO PARA EL ZOOM DE IMAGEN
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // DATOS DEL TIMELINE: CONFIGURACIÓN DE AÑOS Y FORMATOS
  // format: 'JPG' (mayúscula) o 'png' (minúscula) según tus carpetas reales.
  const timelineData = [
    { year: 2020, format: "JPG", comment: "Donde nuestra historia comenzó entre mensajes, llamadas y jueguitos." },
    { year: 2021, format: "png", comment: "Rompimos las barreras de la distancia y me enamore de ti aun más." },
    { year: 2022, format: "png", comment: "Primera vez de vae en Chile." },
    { year: 2023, format: "png", comment: "Un años super bonito, te mudaste a Cordoba y me enseñaste Carlos Paz." },
    { year: 2024, format: "png", comment: "LLEGO NENIWI! LLEGO NENIWI! y tambien tomamos melon con vino." },
    { year: 2025, format: "png", comment: "El mejor verano de la vida, vimos a top, fuimos al sur y terminamos nuestras vacaciones en Argentina. (tambien huvo visita sorpresa" }
  ];

  return (
    <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen text-rose-900 font-sans selection:bg-rose-200">
      
      {/* --- MODAL DE ZOOM (LightBox) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)} // Cierra al hacer click en el fondo
          >
            {/* Botón Cerrar (X) */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <X size={32} />
            </button>

            {/* Imagen Grande */}
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage} 
              alt="Recuerdo ampliado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()} // Evita cerrar si clickeas la foto misma
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image with Blur */}
        <img 
          src="/img/hero.png" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0  bg-white/60" />

        {/* Lluvia de corazones de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-300/30"
              initial={{ y: -100, x: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ y: "110vh", opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 5 + 8, repeat: Infinity, delay: Math.random() * 5 }}
            >
              <Heart size={Math.random() * 30 + 10} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 relative p-6 text-center space-y-8"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-rose-200 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
             <span className="text-rose-600 text-xs font-bold tracking-[0.2em] uppercase">D & V</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
            Feliz San Valentín
          </h1>
          <p className="text-lg md:text-xl text-rose-900 font-semibold max-w-xl mx-auto leading-relaxed drop-shadow-sm">
             con todo el amor del mundo, para la niña mas linda
          </p>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="text-rose-400" size={32} />
        </motion.div>
      </section>

      {/* SECCIÓN CARTA */}
      <Letter />

      {/* SECCIÓN TIMELINE CON COMENTARIOS Y ZOOM */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 space-y-2">
                <h2 className="text-rose-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">Para celebrar este San Valentin</h2>
                <h2 className="text-rose-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">Te hice una recopilacion de</h2>
                <h3 className="text-4xl font-extrabold text-rose-900">Nuestro amor</h3>
                <p className="text-rose-400 font-medium">con el paso de los años</p>
            </div>

            <div className="space-y-12">
                {timelineData.map((item, index) => (
                    <motion.div 
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-[2rem] border-4 border-rose-200 shadow-xl shadow-rose-200/50 hover:shadow-2xl hover:shadow-rose-300/50 transition-all duration-500 hover:-translate-y-1 hover:border-rose-300"
                    >
                        {/* Columna Izquierda: Año y Comentario */}
                        <div className="md:w-48 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r-2 border-rose-100 pb-6 md:pb-0 md:pr-8 shrink-0">
                            <span className="text-6xl font-black text-rose-400 tracking-tighter drop-shadow-sm">{item.year}</span>
                            <div className="px-3 py-1 bg-rose-100 rounded-full my-3">
                                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Capítulo {index + 1}</span>
                            </div>
                            
                            <p className="text-sm font-semibold text-rose-800 italic text-center md:text-left leading-relaxed">
                              {item.comment}
                            </p>
                        </div>

                        {/* Columna Derecha: Grid de 6 fotos Interactivas */}
                        <div className="flex-1 grid grid-cols-3 gap-4 h-auto">
                            {[1, 2, 3, 4, 5, 6].map((photoNum) => (
                                <div 
                                  key={photoNum} 
                                  className="relative group overflow-hidden rounded-2xl bg-rose-100 cursor-pointer aspect-square shadow-sm border-2 border-transparent hover:border-rose-300 transition-all duration-300"
                                  onClick={() => setSelectedImage(`/img/${item.year}/${photoNum}.${item.format}`)}
                                >
                                    <img 
                                        src={`/img/${item.year}/${photoNum}.${item.format}`} 
                                        alt={`Foto ${photoNum} del ${item.year}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                      <ZoomIn className="text-white drop-shadow-md" size={24} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* --- AÑO 2026: PRÓXIMAMENTE (SIN FOTOS) --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col md:flex-row gap-8 bg-gradient-to-r from-rose-100 to-pink-50 p-6 md:p-8 rounded-3xl border border-rose-200/50 shadow-inner"
                >
                     <div className="md:w-48 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-rose-300 pb-6 md:pb-0 md:pr-8 shrink-0">
                        <span className="text-6xl font-black text-rose-400/80 tracking-tighter">2026</span>
                        <span className="text-xs font-bold text-rose-500 uppercase tracking-widest mt-1 mb-3">El Futuro</span>
                        <p className="text-sm font-medium text-rose-800 italic text-center md:text-left leading-relaxed">
                          Aquí estaran nuestras proximas aventuras.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center h-48 md:h-auto bg-white/40 rounded-2xl border-2 border-dashed border-rose-300 gap-4 text-center p-6">
                        <div className="bg-rose-100 p-4 rounded-full">
                           <Camera size={32} className="text-rose-400" />
                        </div>
                        <div>
                          <p className="font-bold text-rose-800 text-lg">Próximamente...</p>
                          <p className="text-rose-500 text-sm">Vuelve pronto para ver nuevas fotitos.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
      </section>

      {/* SECCIÓN FINAL: CUENTA REGRESIVA */}
      <section className="pt-10 pb-32 px-6 bg-gradient-to-b from-white to-rose-100 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-10 left-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* SECCIÓN DEL RAMO */}
        <section className="py-12 bg-rose-50/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-rose-800">Un detalle para ti 🌷</h3>
            </div>
            <TulipBouquet />
        </section>         
        
        <div className="relative z-10">
            <Countdown />

            <div className="mt-24 text-center space-y-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-rose-900 mb-2">Te amo infinitamente</h2>
                  <p className="text-sm text-rose-500 font-medium tracking-wide">
                    Hecho con todo mi ❤️ para ti.
                  </p>
                </motion.div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MainExperience;