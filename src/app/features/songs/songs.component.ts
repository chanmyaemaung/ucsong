import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockDataService } from '@core/services/mock-data/mock-data.service';
import { TranslationService } from '@core/services/translation/translation.service';
import { ISong } from '@core/interfaces/song.interface';

/**
 * Songs list component
 * Displays all songs in grid/list view with translation support
 * @class SongsComponent
 */
@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './songs.component.html',
  styles: [
    `
      .song-grid {
        @apply grid grid-cols-2 md:grid-cols-4 gap-4;
      }
      .song-list {
        @apply space-y-4;
      }
      .song-card {
        @apply p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow;
      }
    `,
  ],
})
export class SongsComponent {
  private mockDataService = inject(MockDataService);
  private translationService = inject(TranslationService);

  /** All songs */
  songs: ISong[] = this.mockDataService.getSongs();

  /** View mode state */
  isGridView = signal(true);

  /**
   * Toggle between grid and list view
   */
  toggleView(): void {
    this.isGridView.update((v) => !v);
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
