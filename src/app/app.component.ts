import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatButtonModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isAppVisible = false;
  constructor(private router: Router) {}

  hideAppComponent() {
    this.router.navigate(['home']);
    this.isAppVisible = true;
  }
}
