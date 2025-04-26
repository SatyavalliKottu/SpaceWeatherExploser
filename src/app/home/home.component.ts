import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { TeacherResourceComponent } from '../teacher-resource/teacher-resource.component';
import { VocabularyWorkoutComponent } from '../vocabulary-workout/vocabulary-workout.component';
import { NameofthePlanetComponent } from '../nameofthe-planet/nameofthe-planet.component';
import { K12Component } from '../k12/k12.component';
import { DynamicRenderComponent } from '../dynamic-render.component';
import { GameComponent } from '../game/game.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ClassroomResourceComponent } from '../classroom-resource/classroom-resource.component';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DynamicRenderComponent,
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    TeacherResourceComponent,
    VocabularyWorkoutComponent,
    NameofthePlanetComponent,
    K12Component,
    GameComponent,
    ClassroomResourceComponent,
    MatTabsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isHomeVisible: boolean = true;
  isLoggedIn: boolean = false; // ✅ Track login state
  currentComponent: any = null;
  constructor(private router: Router) {}
  private componentMap = {
    about: AboutComponent,
    teacherResource: TeacherResourceComponent,
    vocabulary: VocabularyWorkoutComponent,
    nameofthePlanet: NameofthePlanetComponent,
    K12grade: K12Component,
  };

  loadComponent(componentName: string): void {
    // Assert that the componentName is a key of the componentMap
    this.isHomeVisible = false;
    this.currentComponent =
      this.componentMap[componentName as keyof typeof this.componentMap];
  }
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
}
