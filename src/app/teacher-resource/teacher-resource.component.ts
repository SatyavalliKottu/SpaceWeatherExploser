import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-teacher-resource',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './teacher-resource.component.html',
  styleUrl: './teacher-resource.component.scss',
})
export class TeacherResourceComponent {}
