import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '@core/services/language.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';
import { SongsService } from './services/songs.service';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent {
  searchControl = new FormControl('');
  isGridView = signal(true);
  songsService = inject(SongsService);
  languageService = inject(LanguageService);
  private router = inject(Router);

  currentLang = this.languageService.currentLanguage;

  filteredSongs = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    map((value) => this._filter(value || ''))
  );

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.songsService.songs().filter((song) => {
      const title = song.translations[this.currentLang()]?.title.toLowerCase();
      const number = song.number.toLowerCase();
      return title?.includes(filterValue) || number.includes(filterValue);
    });
  }

  highlightMatch(text: string) {
    const searchValue = this.searchControl.value;
    if (!searchValue) return text;

    const regex = new RegExp(searchValue, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  }

  displayFn(song: any): string {
    if (!song) return '';
    return `${song.number} - ${song.translations[this.currentLang()].title}`;
  }

  onOptionSelected(song: any) {
    // Navigate to song detail page
    this.router.navigate(['/songs', song.id]);
  }

  toggleView() {
    this.isGridView.update((v) => !v);
  }
}
