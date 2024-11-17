import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockDataService } from '@core/services/mock-data/mock-data.service';
import { TranslationService } from '@core/services/translation/translation.service';
import { IHero } from '@core/interfaces/hero.interface';

/**
 * Home page component
 * Displays hero section, search functionality and songs grid/list view
 * @class HomeComponent
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private mockDataService = inject(MockDataService);
  private translationService = inject(TranslationService);

  /** Hero section data */
  hero: IHero = this.mockDataService.getHero();

  /** View mode state */
  isGridView = signal(true);

  /**
   * Toggle between grid and list view
   */
  toggleView(): void {
    this.isGridView.update((v) => !v);
  }

  /**
   * Handle search input changes
   * @param event Input event
   */
  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    // Will implement search logic
  }

  /**
   * Get translated content
   * @param content Content object with translations
   * @returns Translated content
   */
  getTranslated<T>(content: Record<string, T>): T {
    return this.translationService.getTranslated(content);
  }
}
