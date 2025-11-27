export enum SectionId {
  HOME = 'inicio',
  ABOUT = 'nosotros',
  REVIEW = 'resena',
  VACCINES = 'vacunas',
  NEWS = 'noticias',
  CONTACT = 'contacto'
}

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface VaccineInfo {
  age: string;
  vaccines: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  url: string;
}

export interface SocialPost {
  id: number;
  username: string;
  imageUrl: string;
  caption: string;
  likes: number;
  postUrl: string;
}

export interface NewsData {
  news: NewsItem[];
  instagram: SocialPost[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}