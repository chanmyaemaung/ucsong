import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private platform = inject(Platform);
  private themeSignal = signal<Theme>('light');

  currentTheme = this.themeSignal.asReadonly();

  toggleTheme() {
    const newTheme = this.themeSignal() === 'light' ? 'dark' : 'light';
    this.themeSignal.set(newTheme);
    this.applyTheme(newTheme);
  }

  private applyTheme(theme: Theme) {
    if (this.platform.isBrowser) {
      this.document.documentElement.setAttribute('data-theme', theme);
      localStorage?.setItem('theme', theme);

      const body = this.document.body;
      if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    }
  }

  initializeTheme() {
    if (this.platform.isBrowser) {
      const savedTheme = (localStorage?.getItem('theme') as Theme) || 'light';
      this.themeSignal.set(savedTheme);
      this.applyTheme(savedTheme);
    }
  }
}
