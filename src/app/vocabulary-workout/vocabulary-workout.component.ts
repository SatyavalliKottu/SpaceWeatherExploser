import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-vocabulary-workout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatListModule],
  templateUrl: './vocabulary-workout.component.html',
  styleUrl: './vocabulary-workout.component.scss',
})
export class VocabularyWorkoutComponent {
  vocabulary = [
    {
      term: 'Atmosphere',
      definition:
        'The air around us that we breathe, like a big blanket of gas around the Earth.',
    },
    {
      term: 'Auroras',
      definition:
        'Colorful lights in the sky, usually near the North or South Poles, like nature’s own light show!',
    },
    {
      term: 'Earth',
      definition:
        'The planet we live on. It’s round and has land, water, and air.',
    },
    {
      term: 'Magnetic Field',
      definition:
        'An invisible shield around Earth that helps protect us from harmful rays from the Sun.',
    },
    {
      term: 'Solar Flares',
      definition: 'Big bursts of energy from the Sun, like fireworks in space.',
    },
    {
      term: 'Space Weather',
      definition:
        'What happens in space, like when the Sun sends out energy, wind, or flares.',
    },
  ];

  selectedTerm: string = ''; // To hold the selected term
  selectedDefinition: string = ''; // To hold the selected definition

  displayDefinition(index: number): void {
    this.selectedTerm = this.vocabulary[index].term;
    this.selectedDefinition = this.vocabulary[index].definition;
  }
}
