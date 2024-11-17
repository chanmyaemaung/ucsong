/**
 * Hero section translations interface
 * @interface IHero
 */
export interface IHero {
  title: {
    my: string;
    en: string;
    th: string;
  };
  subtitle: {
    my: string;
    en: string;
    th: string;
  };
  search: {
    label: {
      my: string;
      en: string;
      th: string;
    };
    placeholder: {
      my: string;
      en: string;
      th: string;
    };
  };
  toggleView: {
    grid: {
      my: string;
      en: string;
      th: string;
    };
    list: {
      my: string;
      en: string;
      th: string;
    };
  };
}
