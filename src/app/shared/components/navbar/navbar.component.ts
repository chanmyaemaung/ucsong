import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ThemeService } from '@core/services/theme/theme.service';
import { TranslationService } from '@core/services/translation/translation.service';
import { MockDataService } from '@core/services/mock-data/mock-data.service';
import { SettingsModalComponent } from '../settings-modal/settings-modal.component';
import { INavItem } from '@core/interfaces/nav.interface';

/**
 * Navigation bar component
 * @class NavbarComponent
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgIf, SettingsModalComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);
  private mockDataService = inject(MockDataService);

  /** Settings modal visibility state */
  showSettings = signal(false);

  /** Navigation items */
  readonly navItems: INavItem[] = this.mockDataService.getNavItems();

  /**
   * Get translated content
   * @param content Content object with translations
   * @returns Translated content
   */
  getTranslated<T>(content: Record<string, T>): T {
    return this.translationService.getTranslated(content);
  }

  /**
   * Toggle settings modal
   */
  toggleSettings(): void {
    this.showSettings.update((value) => !value);
  }
}
