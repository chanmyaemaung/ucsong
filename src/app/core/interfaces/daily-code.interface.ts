/**
 * Daily code interface for hero carousel
 * @interface IDailyCode
 */
export interface IDailyCode {
  id: number;
  title: {
    my: string;
    en: string;
    th: string;
  };
  content: {
    my: string;
    en: string;
    th: string;
  };
}
