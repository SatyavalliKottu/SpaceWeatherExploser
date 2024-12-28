import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-vocabulary-workout',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vocabulary-workout.component.html',
  styleUrl: './vocabulary-workout.component.scss',
})
export class VocabularyWorkoutComponent {
  vocabularyTerms = [
    {
      title: 'Weather',
      description: "What's happening outside, like rain, sunshine, or snow.",
      image: '../../assets/Weather.jpg',
    },
    {
      title: 'Solar',
      description: 'Anything related to the Sun.',
      image: '../../assets/solar.jpg',
    },
    {
      title: 'EARTH',
      description:
        'The planet we live on. It’s round and has land, water, and air.',
      image: '../../assets/earth.jpg',
    },
    {
      title: 'Sun',
      description:
        'The big, bright star in the sky that gives us light and heat.',
      image: '../../assets/sun.jpg',
    },
    {
      title: 'ATMOSPHERE',
      description:
        'The air around us that we breathe, like a big blanket of gas.',
      image: '../../assets/ATMOSPHERE.jpg',
    },
    {
      title: 'AURORA',
      description: 'Colorful lights in the sky, near the North or South Poles.',
      image: '../../assets/ATMOSPHERE.jpg',
    },
    {
      title: 'EARTH ATMOSPHERE',
      description: 'The layer of air that surrounds the Earth.',
      image: '../../assets/EARTH ATMOSPHERE.jpg',
    },
    {
      title: 'MAGNETIC FIELD',
      description:
        'An invisible shield around Earth protecting us from harmful rays.',
      image: '../../assets/MAGNETIC FIELD.jpg',
    },
    {
      title: 'SOLAR FLAIRS',
      description:
        'Big bursts of energy from the Sun, like fireworks in space.',
      image: '../../assets/SOLAR FLAIRS.jpg',
    },
    {
      title: 'SOLAR WINDS',
      description: 'A stream of tiny particles that travel through space.',
      image: '../../assets/SOLAR WINDS.jpg',
    },
    {
      title: 'SUNSPOT',
      description:
        'Dark spots on the Sun that are cooler than the rest of its surface.',
      image: '../../assets/SUNSPOT.jpg',
    },
    {
      title: 'SUN’S ATMOSPHERE',
      description: 'The hot layer of gas around the Sun.',
      image: '../../assets/sun.jpg',
    },

    {
      SpaceWeather: {
        title: 'SPACE WEATHER',
        description:
          'Is what happens in space, like when the Sun sends out energy, wind, or flares. Sometimes, t can make colorful lights in the sky (auroras) or even affect things on Earth like satellites and power. ',
        image: '../../assets/SPACE WEATHER.jpg',
      },
    },
  ];

  // Filter out the SpaceWeather term and pass only valid vocabulary terms
  filteredVocabularyTerms = this.vocabularyTerms.filter(
    (term) => !term.SpaceWeather
  );

  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '60%',
      height: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { terms: this.filteredVocabularyTerms },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.filteredVocabularyTerms = result();
      }
    });
  }
}
@Component({
  selector: 'dialog-animations-example-dialog',
  standalone: true,
  templateUrl: 'dialog-animations-example-dialog.html',
  styleUrls: ['dialog-animations-example-dialog.scss'],
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatCardModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly data = inject(MAT_DIALOG_DATA);
  terms = this.data.terms || []; // Get vocabularyTerms from parent component
  activeTermIndex = 0; // Track the active term index
  flip: string = 'inactive'; // Flip state for the active card

  flippedCards: boolean[] = []; // Track flipped state for each card
  currentIndex: number = 0; // Track the current term being displayed

  constructor() {
    // Initialize all cards as unflipped
    this.flippedCards = Array(this.terms.length).fill(false);
  }

  // Toggle flip state for the selected card
  flipCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
    this.flip = this.flippedCards[index] ? 'active' : 'inactive';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  // Check if we are at the last term

  // Go to the next term and reset flip state
  nextTerm() {
    // Check if we're at the last card
    if (this.activeTermIndex < this.terms.length - 1) {
      this.flippedCards[this.currentIndex] = true;
      this.flip = 'inactive'; // Reset flip state
      this.activeTermIndex++; // Increment the term index
      this.currentIndex++;
    } else {
      // For the last card (Sun's Atmosphere), add a delay before flipping or closing the dialog
      this.flippedCards[this.currentIndex] = true;
      this.flip = 'inactive'; // Reset flip state

      // Add a delay before closing the dialog, giving the user time to read the description
      setTimeout(() => {
        // Delay the closing or transition of the dialog (3 seconds here)
        this.dialogRef.close();
      }, 1000); // 3000 milliseconds = 3 seconds
    }
  }

  // Optional: Close dialog manually
  closeDialog(): void {
    this.dialogRef.close();
  }
  // Go to the previous term and reset flip state
  previousTerm() {
    if (this.activeTermIndex > 0) {
      this.flip = 'inactive'; // Reset flip
      this.activeTermIndex--; // Decrement term index
    }
  }

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
}
