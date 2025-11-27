import { NavItem, SectionId, VaccineInfo, NewsItem, SocialPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', id: SectionId.HOME },
  { label: 'Nosotros', id: SectionId.ABOUT },
  { label: 'Reseña', id: SectionId.REVIEW },
  { label: 'Esquema', id: SectionId.VACCINES },
  { label: 'Noticias', id: SectionId.NEWS },
  { label: 'Contacto', id: SectionId.CONTACT },
];

export const VACCINE_SCHEDULE: VaccineInfo[] = [
  { age: "Recién Nacido", vaccines: ["BCG (Tuberculosis)", "Hepatitis B"] },
  { age: "2 Meses", vaccines: ["Rotavirus", "Polio (IPV)", "Pentavalente", "Neumococo"] },
  { age: "4 Meses", vaccines: ["Rotavirus", "Polio (IPV)", "Pentavalente", "Neumococo"] },
  { age: "6 Meses", vaccines: ["Polio (OPV)", "Pentavalente"] },
  { age: "12 Meses", vaccines: ["SRP (Sarampión, Rubéola, Paperas)", "Neumococo (Refuerzo)"] },
  { age: "18 Meses", vaccines: ["DPT (Difteria, Tétanos, Tosferina)", "Polio (OPV)", "SRP (Refuerzo)"] },
  { age: "4 Años", vaccines: ["DPT (Refuerzo)", "Polio (OPV)"] },
  { age: "9-14 Años", vaccines: ["VPH (Virus Papiloma Humano) - Niñas y Niños"] },
];

export const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 0,
    title: "Sociedad de Vacunología presenta su nueva directiva para 2025-2027",
    date: "27 May, 2025",
    summary: "La Sociedad Dominicana de Vacunología (SDV) dio a conocer su nueva directiva para el período 2025-2027, presidida por el doctor Marcos Díaz Guillén.",
    imageUrl: "/images/news-2.png",
    url: "https://www.diariosalud.do/noticias/sociedad-de-vacunologia-presenta-su-nueva-directiva-para-2025-2027/"
  },
  {
    id: 1,
    title: "Jornada Nacional de Vacunación contra Influenza",
    date: "10 Oct, 2023",
    summary: "La SDV invita a toda la población a participar en la jornada anual de prevención.",
    imageUrl: "/images/news-1.png",
    url: "https://www.google.com/search?q=Jornada+Nacional+de+Vacunaci%C3%B3n+contra+Influenza+Rep%C3%BAblica+Dominicana"
  },
  {
    id: 2,
    title: "Nuevos avances en vacunas ARNm",
    date: "25 Sep, 2023",
    summary: "Conferencia magistral sobre el futuro de la inmunización en República Dominicana.",
    imageUrl: "/images/news-2.png",
    url: "https://www.google.com/search?q=Avances+vacunas+ARNm+Rep%C3%BAblica+Dominicana"
  },
  {
    id: 3,
    title: "Importancia de completar el esquema en niños",
    date: "05 Sep, 2023",
    summary: "Un recordatorio a los padres sobre el seguimiento del calendario oficial.",
    imageUrl: "/images/news-3.png",
    url: "https://www.google.com/search?q=Importancia+esquema+vacunacion+ni%C3%B1os+Rep%C3%BAblica+Dominicana"
  }
];

export const FALLBACK_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 1,
    username: "@sdvacunas",
    imageUrl: "/images/insta-1.png",
    caption: "¡Protégete a ti y a tu familia! La vacunación es un acto de amor. ❤️💉 #VacunateRD #SaludPublica",
    likes: 124,
    postUrl: "https://www.instagram.com/"
  },
  {
    id: 2,
    username: "@drbreacastillo",
    imageUrl: "/images/insta-2.png",
    caption: "Compartiendo hoy en el congreso sobre los nuevos retos de la infectología pediátrica. 📚👨‍⚕️ #Medicina #RD",
    likes: 89,
    postUrl: "https://www.instagram.com/"
  },
  {
    id: 3,
    username: "@sdvacunas",
    imageUrl: "/images/insta-1.png",
    caption: "Recuerda revisar el esquema de vacunación de tus hijos antes del inicio de clases. 🏫👶 #RegresoAClases #Vacunas",
    likes: 256,
    postUrl: "https://www.instagram.com/"
  }
];