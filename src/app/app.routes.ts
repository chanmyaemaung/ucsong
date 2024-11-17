import { Routes, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'songs',
    loadComponent: () =>
      import('@features/songs/songs.component').then((m) => m.SongsComponent),
  },
  {
    path: 'songs/:id',
    loadComponent: () =>
      import('@features/songs/song-detail/song-detail.component').then(
        (m) => m.SongDetailComponent
      ),
  },
  {
    path: 'pledge',
    loadComponent: () =>
      import('@features/pledge/pledge.component').then(
        (m) => m.PledgeComponent
      ),
  },
];
