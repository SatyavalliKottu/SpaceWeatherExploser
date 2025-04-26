import { Component, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import imageMapResize from 'image-map-resizer';
import { PlanetDialogComponent } from './planet-dialog.component';

@Component({
  selector: 'app-nameofthe-planet',
  standalone: true,
  templateUrl: './nameofthe-planet.component.html',
  styleUrls: ['./nameofthe-planet.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PlanetDialogComponent,
  ],
})
export class NameofthePlanetComponent implements AfterViewInit {
  showIntro = true; // toggle flag
  constructor(private dialog: MatDialog, private location: Location) {}

  ngAfterViewInit(): void {
    imageMapResize();
  }

  goBack(): void {
    this.location.back();
  }

  handleClick(event: MouseEvent, planet: string): void {
    event.preventDefault();
    this.openDialog(planet);
  }

  openDialog(planet: string): void {
    const planetData: any = {
      sun: {
        title: 'Sun',
        description:
          'The Sun is about 109 times wider than Earth and makes up 99.86% of the solar system’s mass. Its surface burns at 5,500°C, while its core reaches 15 million°C. Nuclear fusion powers sunlight reaching Earth in about 8 minutes.',
        temperature: '9940.73 degrees F',
        radius: '432,685 mi',
        icon: '☀️',
        image: '../../assets/SunPlanet.jpeg',
      },

      venus: {
        title: 'Venus',
        description:
          'Venus is the hottest planet in the solar system with a dense atmosphere rich in carbon dioxide. It spins in the opposite direction to most planets.',
        temperature: '867 degrees F',
        radius: '3,760 mi',
        icon: '🔥',
        image: '../../assets/venusPlanet.jpeg ',
      },
      mercury: {
        title: 'Mercury',
        description:
          'Mercury is the closest planet to the Sun and the smallest in our solar system. It has no atmosphere to retain heat, resulting in extreme temperature swings.',
        temperature: '800 degrees F',
        radius: '1,516 mi',
        icon: '🪙',
        image: '../../assets/mercuryplanet.jpeg',
      },
      earth: {
        title: 'Earth',
        description:
          'Earth is the only known planet to support life. It has a balanced climate system and a protective magnetic field.',
        temperature: '57 degrees F',
        radius: '3,958.8 mi',
        icon: '🌍',
        image: '../../assets/earthplanet.jpeg',
      },
      mars: {
        title: 'Mars',
        description:
          'Mars is known as the Red Planet. It has the largest volcano in the solar system and signs of ancient water flow.',
        temperature: '-81 degrees F',
        radius: '2,106 mi',
        icon: '🔴',
        image: '../../assets/marsPlanet.jpeg',
      },
      jupiter: {
        title: 'Jupiter',
        description:
          'Jupiter is the largest planet in our solar system with a giant storm known as the Great Red Spot and dozens of moons.',
        temperature: '-234 degrees F',
        radius: '43,441 mi',
        icon: '🌀',
        image: '../../assets/jupiterPlanet.jpeg',
      },
      saturn: {
        title: 'Saturn',
        description:
          'Saturn is famous for its prominent ring system made of ice and rock particles. It is a gas giant with dozens of moons.',
        temperature: '-288 degrees F',
        radius: '36,184 mi',
        icon: '💍',
        image: '../../assets/saturnPlanet.jpeg',
      },
      uranus: {
        title: 'Uranus',
        description:
          'Uranus rotates on its side and has a pale blue color due to methane in its atmosphere. It is the coldest planet in our solar system.',
        temperature: '-320 degrees F',
        radius: '15,759 mi',
        icon: '🔵',
        image: '../../assets/uranusPlanet.jpeg',
      },
      neptune: {
        title: 'Neptune',
        description:
          'Neptune is known for its deep blue color and powerful storms. It’s the farthest planet from the Sun.',
        temperature: '-373 degrees F',
        radius: '15,299 mi',
        icon: '🌊',
        image: '../../assets/neptunePlanet.jpeg',
      },
    };

    const data = planetData[planet];

    if (data) {
      this.dialog.open(PlanetDialogComponent, {
        data,
        hasBackdrop: true,
        panelClass: 'custom-fullscreen-dialog',
      });
    }
  }
}
