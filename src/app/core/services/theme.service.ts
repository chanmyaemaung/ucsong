import { Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

/**
 * Theme service handles application-wide theme management
 * @class ThemeService
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);

  /** Current theme state */
  private theme = signal<'light' | 'dark'>('light');

  /**
   * Initializes theme from localStorage if available
   */
  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.theme.set(savedTheme);
      this.applyTheme(savedTheme);
    }
  }

  /**
   * Toggles between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  /**
   * Applies theme class to document body
   */
  private applyTheme(theme: 'light' | 'dark'): void {
    const body = this.document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
}
