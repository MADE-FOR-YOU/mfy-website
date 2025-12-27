
export type Language = 'en' | 'fr';

export interface TranslatableString {
  en: string;
  fr: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: TranslatableString;
  bio: TranslatableString;
  image: string;
}

export interface ProgramItem {
  id: string;
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: 'KEYNOTE' | 'WORKSHOP' | 'PANEL' | 'TALK' | 'BREAK';
  day: number;
}

export interface CoreValue {
  icon: React.ReactNode;
  title: TranslatableString;
  desc: TranslatableString;
}

export interface GalleryItem {
  id: string;
  url: string;
  type: 'photo' | 'video';
  day?: number;
}

export interface TranslationStrings {
  [key: string]: {
    en: string;
    fr: string;
  };
}
