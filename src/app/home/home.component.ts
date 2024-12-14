import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { TeacherResourceComponent } from '../teacher-resource/teacher-resource.component';
import { VocabularyWorkoutComponent } from '../vocabulary-workout/vocabulary-workout.component';
import { NameofthePlanetComponent } from '../nameofthe-planet/nameofthe-planet.component';
import { K12Component } from '../k12/k12.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isHomeVisible: boolean = true;
  constructor(private router: Router, private location: Location) {}
  navigateToPage(route: string): void {
    this.isHomeVisible = false; // Hide the home page when navigating
    // this.router.navigate([route]);
  }
}
