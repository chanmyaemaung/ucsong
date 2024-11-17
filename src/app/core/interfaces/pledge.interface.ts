/**
 * Pledge data interface
 * @interface IPledge
 */
export interface IPledge {
  title: {
    my: string;
    en: string;
    th: string;
  };
  content: {
    my: string[];
    en: string[];
    th: string[];
  };
}
