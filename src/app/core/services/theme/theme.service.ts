import { Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { ITheme, IThemeService } from '@core/interfaces/theme.interface';
import { StorageService } from '@core/services/storage/storage.service';

/**
 * Theme service implements IThemeService following Single Responsibility Principle
 * @class ThemeService
 * @implements {IThemeService}
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService implements IThemeService {
  private document = inject(DOCUMENT);
  private storageService = inject(StorageService);

  /** Theme state using signals */
  private themeSignal = signal<ITheme>({
    name: 'light',
    class: 'light',
  });

  constructor() {
    this.initializeTheme();
  }

  /**
   * Initialize theme from storage or use default
   * @private
   */
  private initializeTheme(): void {
    const savedTheme = this.storageService.getItem('theme');
    if (savedTheme) {
      const theme: ITheme = {
        name: savedTheme as 'light' | 'dark',
        class: savedTheme, // Tailwind uses 'dark' class
      };
      this.themeSignal.set(theme);
      this.applyTheme(theme);
    }
  }

  /**
   * Get current theme
   * @returns {ITheme}
   */
  getCurrentTheme(): ITheme {
    return this.themeSignal();
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const currentTheme = this.themeSignal();
    const newTheme: ITheme = {
      name: currentTheme.name === 'light' ? 'dark' : 'light',
      class: currentTheme.name === 'light' ? 'dark' : 'light',
    };

    this.themeSignal.set(newTheme);
    this.applyTheme(newTheme);
    this.storageService.setItem('theme', newTheme.name);
  }

  /**
   * Apply theme to document
   * @param {ITheme} theme - Theme to apply
   */
  applyTheme(theme: ITheme): void {
    const body = this.document.body;
    if (theme.name === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
}
