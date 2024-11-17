import { Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSignal = signal<Theme>('light');
  
  currentTheme = this.themeSignal.asReadonly();
  
  toggleTheme() {
    const newTheme = this.themeSignal() === 'light' ? 'dark' : 'light';
    this.themeSignal.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
  
  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') as Theme || 'light';
    this.themeSignal.set(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
} 