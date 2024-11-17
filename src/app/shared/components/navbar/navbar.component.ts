import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

/**
 * NavbarComponent - Main navigation bar of the application
 *
 * Features:
 * - Displays application logo (falls back to text if image fails to load)
 * - Navigation links to main routes
 * - Settings dialog access
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  /** Tracks if the logo image exists and loaded successfully */
  logoExists = true;

  /** Path to the logo image in assets folder */
  readonly logoPath = 'assets/images/logo.png';

  private dialog = inject(MatDialog);
  private platform = inject(Platform);

  ngOnInit() {
    // Only verify logo on browser platform
    if (this.platform.isBrowser) {
      this.verifyLogoExists();
    } else {
      // In SSR, default to fallback
      this.logoExists = false;
    }
  }

  /**
   * Verifies if the logo image exists and can be loaded
   * Sets logoExists flag accordingly
   * Only runs in browser environment
   */
  private verifyLogoExists(): void {
    if (this.platform.isBrowser) {
      fetch(this.logoPath)
        .then((response) => {
          this.logoExists = response.ok;
          if (!response.ok) {
            console.warn('Logo image failed to load:', this.logoPath);
          }
        })
        .catch(() => {
          console.warn('Logo image failed to load:', this.logoPath);
          this.logoExists = false;
        });
    }
  }

  /**
   * Handles logo loading error
   * Falls back to text logo
   */
  onLogoError(): void {
    console.warn('Logo failed to load, falling back to text logo');
    this.logoExists = false;
  }

  /**
   * Opens the settings dialog
   * Allows users to change theme and language preferences
   */
  openSettings(): void {
    this.dialog.open(SettingsDialogComponent, {
      width: '350px',
    });
  }
}
