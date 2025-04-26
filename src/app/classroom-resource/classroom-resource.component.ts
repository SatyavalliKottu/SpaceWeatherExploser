import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-resource',
  standalone: true,
  imports: [],
  templateUrl: './classroom-resource.component.html',
  styleUrl: './classroom-resource.component.scss',
})
export class ClassroomResourceComponent {
  constructor(private location: Location, private router: Router) {}
  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
  }
}
