/**
 * Song data interface
 * @interface ISong
 */
export interface ISong {
  id: number;
  number: string;
  title: {
    my: string;
    en: string;
    th: string;
  };
  author: {
    my: string;
    en: string;
    th: string;
  };
  lyrics: {
    my: string[];
    en: string[];
    th: string[];
  };
}
