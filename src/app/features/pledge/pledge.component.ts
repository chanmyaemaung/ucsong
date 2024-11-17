import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '@core/services/mock-data/mock-data.service';
import { TranslationService } from '@core/services/translation/translation.service';
import { IPledge } from '@core/interfaces/pledge.interface';

/**
 * Pledge component
 * Displays family pledge with translation support
 * @class PledgeComponent
 */
@Component({
  selector: 'app-pledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pledge.component.html',
})
export class PledgeComponent {
  private mockDataService = inject(MockDataService);
  private translationService = inject(TranslationService);

  /** Pledge data */
  pledge: IPledge = this.mockDataService.getPledge();

  /**
   * Get translated content
   * @param content Content object with translations
   * @returns Translated content
   */
  getTranslated<T>(content: Record<string, T>): T {
    return this.translationService.getTranslated(content);
  }
}
