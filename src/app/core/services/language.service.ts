import { Injectable, signal } from '@angular/core';

type Language = 'en' | 'my' | 'th';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSignal = signal<Language>('en');

  currentLanguage = this.languageSignal.asReadonly();

  setLanguage(lang: Language) {
    this.languageSignal.set(lang);
    localStorage.setItem('language', lang);
  }

  initializeLanguage() {
    const savedLang = (localStorage.getItem('language') as Language) || 'en';
    this.languageSignal.set(savedLang);
  }
}
