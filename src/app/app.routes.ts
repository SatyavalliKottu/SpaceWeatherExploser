import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { TeacherResourceComponent } from './teacher-resource/teacher-resource.component';
import { VocabularyWorkoutComponent } from './vocabulary-workout/vocabulary-workout.component';
import { NameofthePlanetComponent } from './nameofthe-planet/nameofthe-planet.component';
import { K12Component } from './k12/k12.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teacher-resource', component: TeacherResourceComponent },
  { path: 'vocabulary', component: VocabularyWorkoutComponent },
  { path: 'nameoftheplanet', component: NameofthePlanetComponent },
  { path: 'k12', component: K12Component },
];
