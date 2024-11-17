import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LanguageService } from '@core/services/language.service';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  template: `
    <h2 mat-dialog-title>Settings</h2>
    <mat-dialog-content>
      <div class="settings-section">
        <h3>Appearance</h3>
        <mat-slide-toggle
          [checked]="themeService.currentTheme() === 'dark'"
          (change)="themeService.toggleTheme()"
        >
          Dark Mode
        </mat-slide-toggle>
      </div>

      <div class="settings-section">
        <h3>Language</h3>
        <mat-form-field>
          <mat-select
            [value]="languageService.currentLanguage()"
            (selectionChange)="languageService.setLanguage($event.value)"
          >
            <mat-option value="en">English</mat-option>
            <mat-option value="my">မြန်မာ</mat-option>
            <mat-option value="th">ไทย</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .settings-section {
        margin-bottom: 1.5rem;
      }
      h3 {
        margin-bottom: 1rem;
        color: var(--text-secondary);
      }
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class SettingsDialogComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
}
