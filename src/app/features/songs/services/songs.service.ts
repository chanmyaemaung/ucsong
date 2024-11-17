import { Injectable, signal } from '@angular/core';
import { mockSongs } from '@mock-data/songs';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private songsSignal = signal<Song[]>(mockSongs);
  songs = this.songsSignal.asReadonly();

  searchSongs(query: string) {
    if (!query.trim()) {
      this.songsSignal.set(mockSongs);
      return;
    }

    const filteredSongs = mockSongs.filter((song) => {
      const currentLang = localStorage.getItem('language') || 'en';
      const songTitle =
        song.translations[
          currentLang as keyof typeof song.translations
        ]?.title.toLowerCase();
      const songLyrics =
        song.translations[
          currentLang as keyof typeof song.translations
        ]?.lyrics.toLowerCase();
      const searchQuery = query.toLowerCase();

      return (
        songTitle?.includes(searchQuery) ||
        songLyrics?.includes(searchQuery) ||
        song.number.toLowerCase().includes(searchQuery) ||
        song.category.toLowerCase().includes(searchQuery)
      );
    });

    this.songsSignal.set(filteredSongs);
  }

  getSongById(id: number) {
    return signal(mockSongs.find((song) => song.id === id));
  }
}
