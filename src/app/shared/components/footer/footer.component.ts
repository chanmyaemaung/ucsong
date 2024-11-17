import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '@core/services/mock-data/mock-data.service';
import { TranslationService } from '@core/services/translation/translation.service';
import { IFooter } from '@core/interfaces/footer.interface';

/**
 * Footer component
 * Displays application footer with translations
 * @class FooterComponent
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private mockDataService = inject(MockDataService);
  private translationService = inject(TranslationService);

  /** Footer data */
  footer: IFooter = this.mockDataService.getFooter();

  /** Current year for copyright */
  currentYear = new Date().getFullYear();

  /**
   * Get translated content
   * @param content Content object with translations
   * @returns Translated content
   */
  getTranslated<T>(content: Record<string, T>): T {
    return this.translationService.getTranslated(content);
  }
}
