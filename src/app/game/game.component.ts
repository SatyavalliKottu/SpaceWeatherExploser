import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  constructor(private location: Location, private router: Router) {}
  isLoggedIn: boolean = false;

  ngOnInit() {
    // ✅ Check if the user is logged in (you can replace this logic with actual authentication)
    this.isLoggedIn = !!localStorage.getItem('user'); // Assume login info stored in localStorage
  }
  navigateToPage(path: string): void {
    if (this.isLoggedIn) {
      this.router.navigate([path]);
    }
  }
  logout() {
    localStorage.removeItem('user'); // Remove login info
    this.isLoggedIn = false; // Update state
    this.router.navigate(['/login']); // Redirect to login
  }
  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
  }
}
