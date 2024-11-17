import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { ThemeService } from '@core/services/theme/theme.service';
import { INavItem } from '@core/interfaces/nav.interface';

/**
 * Navigation bar component
 * @class NavbarComponent
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private themeService = inject(ThemeService);

  /** Navigation items */
  readonly navItems: INavItem[] = [
    { path: '/', label: 'Home', exact: true },
    { path: '/songs', label: 'Songs', exact: false },
    { path: '/pledge', label: 'Pledge', exact: true },
  ];

  /**
   * Toggle theme
   */
  onThemeToggle(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Open settings modal
   * @todo Implement settings modal
   */
  openSettings(): void {
    // Will implement settings modal later
    this.onThemeToggle(); // Temporary: just toggle theme
  }
}
