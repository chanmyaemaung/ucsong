/**
 * Theme configuration interface
 * @interface ITheme
 */
export interface ITheme {
  name: 'light' | 'dark';
  class: string;
}

/**
 * Theme service interface following Interface Segregation Principle
 * @interface IThemeService
 */
export interface IThemeService {
  getCurrentTheme(): ITheme;
  toggleTheme(): void;
  applyTheme(theme: ITheme): void;
}
