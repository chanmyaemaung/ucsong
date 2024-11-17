export interface Translation {
  title: string;
  lyrics: string;
  author: string;
}

export interface Translations {
  en: Translation;
  my: Translation;
  th: Translation;
}

export interface Song {
  id: number;
  number: string;
  category: string;
  translations: Translations;
  createdAt: Date;
  updatedAt: Date;
} 