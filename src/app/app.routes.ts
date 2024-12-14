import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { K12Component } from '../app/k12/k12.component';
import { NameofthePlanetComponent } from '../app/nameofthe-planet/nameofthe-planet.component';
import { TeacherResourceComponent } from '../app/teacher-resource/teacher-resource.component';
import { AboutComponent } from '../app/about/about.component';
import { VocabularyWorkoutComponent } from '../app/vocabulary-workout/vocabulary-workout.component';
import { LoginComponent } from '../app/login/login.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teacherResource', component: TeacherResourceComponent },
  { path: 'vocabulary', component: VocabularyWorkoutComponent },
  { path: 'nameofthePlanet', component: NameofthePlanetComponent },
  { path: 'K12grade', component: K12Component },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },

  // Make sure there is no wild card redirect to '/home'
  { path: '**', redirectTo: '/', pathMatch: 'full' }, // Check if this is necessary and not causing issues
];
