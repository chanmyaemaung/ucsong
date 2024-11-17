import { Component } from '@angular/core';

/**
 * Footer component for the application
 * @class FooterComponent
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
