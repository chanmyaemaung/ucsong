import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@core/services/theme/theme.service';
import { TranslationService } from '@core/services/translation/translation.service';
import { ITheme } from '@core/interfaces/theme.interface';

type SupportedLanguages = 'my' | 'en' | 'th';

/**
 * Settings modal component for managing app-wide settings
 * Follows Single Responsibility Principle by handling only settings UI/UX
 * @class SettingsModalComponent
 */
@Component({
  selector: 'app-settings-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-modal.component.html',
})
export class SettingsModalComponent {
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);

  /** Event emitter for closing the modal */
  @Output() close = new EventEmitter<void>();

  /** Available languages */
  readonly languages: { code: SupportedLanguages; label: string }[] = [
    { code: 'my', label: 'မြန်မာ' },
    { code: 'en', label: 'English' },
    { code: 'th', label: 'ไทย' },
  ];

  /** Current theme */
  currentTheme: ITheme = this.themeService.getCurrentTheme();

  /** Current language */
  currentLang: SupportedLanguages = this.translationService.getCurrentLang();

  /**
   * Toggle theme between light and dark
   */
  onThemeChange(): void {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  /**
   * Change application language
   * @param {SupportedLanguages} lang - Language code to change to
   */
  onLanguageChange(lang: SupportedLanguages): void {
    this.translationService.setLanguage(lang);
    this.currentLang = lang;
  }
}
