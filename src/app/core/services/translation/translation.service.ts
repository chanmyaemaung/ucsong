import { Injectable, signal, computed } from '@angular/core';
import { StorageService } from '@core/services/storage/storage.service';

type SupportedLanguages = 'my' | 'en' | 'th';

/**
 * Translation service for managing application languages
 * Follows Single Responsibility Principle by handling only translation logic
 * @class TranslationService
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  /** Current language signal */
  private currentLang = signal<SupportedLanguages>('my');

  /** Available languages */
  readonly languages: { code: SupportedLanguages; label: string }[] = [
    { code: 'my', label: 'မြန်မာ' },
    { code: 'en', label: 'English' },
    { code: 'th', label: 'ไทย' },
  ];

  constructor(private storageService: StorageService) {
    this.initializeLanguage();
  }

  /**
   * Initialize language from storage or use default
   * @private
   */
  private initializeLanguage(): void {
    const savedLang = this.storageService.getItem(
      'language'
    ) as SupportedLanguages;
    if (savedLang && this.languages.some((lang) => lang.code === savedLang)) {
      this.currentLang.set(savedLang);
    }
  }

  /**
   * Get current language
   * @returns {SupportedLanguages} Current language code
   */
  getCurrentLang(): SupportedLanguages {
    return this.currentLang();
  }

  /**
   * Set application language
   * @param {SupportedLanguages} lang - Language code to set
   */
  setLanguage(lang: SupportedLanguages): void {
    this.currentLang.set(lang);
    this.storageService.setItem('language', lang);
  }

  /**
   * Get translated content
   * @param {Record<SupportedLanguages, T>} content - Content object with translations
   * @returns {T} Translated content
   */
  getTranslated<T>(content: Record<SupportedLanguages, T>): T {
    return content[this.currentLang()];
  }
}
