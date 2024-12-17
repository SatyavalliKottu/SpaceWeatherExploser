import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { TeacherResourceComponent } from '../teacher-resource/teacher-resource.component';
import { VocabularyWorkoutComponent } from '../vocabulary-workout/vocabulary-workout.component';
import { NameofthePlanetComponent } from '../nameofthe-planet/nameofthe-planet.component';
import { K12Component } from '../k12/k12.component';
import { DynamicRenderComponent } from '../dynamic-render.component';

import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

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
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isHomeVisible: boolean = true;
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
  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }
}
