
import { TimelineItem, Photo } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2021",
    title: "El Inicio Digital",
    description: "Nuestros primeros commits en esta relación. Miles de horas de Zoom, lag en la conexión pero sincronía total en el alma.",
    icon: "Code"
  },
  {
    year: "2023",
    title: "A través de las pantallas",
    description: "La distancia se volvió código de nuestro día a día. Viajes constantes cruzando la cordillera para vernos solo unos días.",
    icon: "Monitor"
  },
  {
    year: "2025",
    title: "La conexión física",
    description: "Último año de espera. Optimizando los procesos para el merge final. El despliegue a producción de nuestra convivencia.",
    icon: "Heart"
  }
];

export const PHOTOS: Photo[] = [
  { url: "https://picsum.photos/id/10/400/500", caption: "Nuestro primer viaje", date: "Invierno 2021" },
  { url: "https://picsum.photos/id/20/400/500", caption: "Atardecer en los Andes", date: "Verano 2022" },
  { url: "https://picsum.photos/id/30/400/500", caption: "Café y código juntos", date: "Otoño 2023" },
  { url: "https://picsum.photos/id/40/400/500", caption: "Último abrazo en el aeropuerto", date: "Primavera 2024" },
];

export const PASSWORD_CORRECT = "2026";
