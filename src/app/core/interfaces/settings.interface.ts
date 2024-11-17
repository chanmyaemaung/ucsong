/**
 * Settings translations interface
 * @interface ISettings
 */
export interface ISettings {
  title: {
    my: string;
    en: string;
    th: string;
  };
  appearance: {
    label: {
      my: string;
      en: string;
      th: string;
    };
    options: {
      light: {
        my: string;
        en: string;
        th: string;
      };
      dark: {
        my: string;
        en: string;
        th: string;
      };
    };
  };
  language: {
    label: {
      my: string;
      en: string;
      th: string;
    };
  };
  done: {
    my: string;
    en: string;
    th: string;
  };
}
