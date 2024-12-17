import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private location: Location, private router: Router) {}

  // goBack(): void {
  //   this.location.back(); // This will navigate back to the previous page
  // }
}
