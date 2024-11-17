import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '@core/services/language.service';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-song-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
})
export class SongDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private songsService = inject(SongsService);
  languageService = inject(LanguageService);

  song = this.songsService.getSongById(
    Number(this.route.snapshot.paramMap.get('id'))
  );

  currentLang = this.languageService.currentLanguage;

  goBack() {
    this.router.navigate(['/songs']);
  }
}
