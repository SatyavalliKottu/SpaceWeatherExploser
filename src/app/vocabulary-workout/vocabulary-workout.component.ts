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
import { Location } from '@angular/common';

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
      image: '../../assets/TheSunsAtmosphere.jpg',
    },
    {
      title: 'Atoms',
      description:
        'eeny,  tiny elements that have  a nucleus containing protons which are positively charged  particles + and neutrons which are neutral  particles.',
      image: '../../assets/atom image.jpg',
    },
    {
      title: 'Matter',
      description: 'anything that takes up space and has weight.',
      image: '../../assets/matter.png',
    },
    {
      title: 'Elements',
      description: 'fundamental materials of which all matter is composed.',
      image: '../../assets/element.jpg',
    },
    {
      title: 'Molecules',
      description:
        'atoms bond together, which are the building blocks of all physical substances.',
      image: '../../assets/molecules.webp',
    },
    {
      title: 'Energy',
      description: 'The ability to do work or cause change.',
      image: '../../assets/energy.jpg',
    },
    {
      title: 'Heat Transfer',
      description: 'The energy of anything moving.',
      image: '../../assets/heat transfer.webp',
    },
    {
      title: 'Thermal Energy',
      description: 'The energy of heat!.',
      image: '../../assets/thermal energy.webp',
    },
    {
      title: 'Electromagnetic Energy',
      description:
        'Energy formed from electricity and magnetism, carried by oscillating electric and magnetic fields in the form of  invisible waves that can travel far and move through empty space.',
      image: '../../assets/electromagnetic magnetic.png',
    },
    {
      title: 'Magnetism',
      description:
        'A powerful, invisible force that can cause certain objects like metals to move (push or pull) without touching.',
      image: '../../assets/magnetism.webp',
    },
    {
      title: 'Radiation',
      description:
        'when heat or energy travels through empty space as invisible waves without needing a continuous push or pull.',
      image: '../../assets/radiation.jpg',
    },
    {
      title: 'Solar Wind',
      description:
        'A stream of charged particles released from the Sun’s outer atmosphere, traveling through space.',
      image: '../../assets/solar wind.jpg',
    },
    {
      title: 'Magnetosphere',
      description:
        'The region around Earth controlled by its magnetic field, protecting the planet from solar wind.',
      image: '../../assets/Magnetosphere.webp',
    },
    {
      title: 'Geomagnetic Storm',
      description:
        'A disturbance in Earth’s magnetic field caused by solar activity, which can disrupt communications and power grids.',
      image: '../../assets/geomagnetic-storm.png',
    },
    {
      title: 'Solar Flare',
      description:
        'A sudden and intense burst of energy from the Sun’s surface, releasing radiation and charged particles.',
      image: '../../assets/solar flare.jpeg',
    },
    {
      title: 'Coronal Mass Ejection (CME)',
      description:
        ' A large expulsion of plasma and magnetic field from the Sun’s corona that can impact Earth’s space environment.',
      image: '../../assets/coronal mass ejection.webp',
    },
    {
      title: 'Aurora ',
      description:
        'A natural light display (such as the Northern and Southern Lights) caused by charged particles interacting with Earth’s atmosphere.',
      image: '../../assets/Aurora vocabulary.jpg',
    },
    {
      title: 'Plasma',
      description:
        'A state of matter consisting of electrically charged particles, found in the Sun and solar wind.',
      image: '../../assets/Plasma-globe.jpg',
    },
    {
      title: 'Ionosphere',
      description:
        'A layer of Earth’s upper atmosphere filled with charged particles that affect radio waves and GPS signals.',
      image: '../../assets/Ionosphere.jpg',
    },
    {
      title: 'Radiation Belt',
      description:
        'Zones of high-energy charged particles trapped by Earth’s magnetic field, such as the Van Allen Belts.',
      image: '../../assets/Radiation belt.jpg',
    },
    {
      title: 'Cosmic Rays',
      description:
        'High-energy particles from space that can impact Earth’s atmosphere and pose risks to astronauts.',
      image: '../../assets/Cosmic-Ray.webp',
    },
    {
      title: 'Solar Cycle',
      description:
        'The approximately 11-year cycle of increasing and decreasing solar activity.',
      image: '../../assets/solar cycle.jpg',
    },
    {
      title: 'Sunspot',
      description:
        ' A darker, cooler area on the Sun’s surface caused by magnetic activity.',
      image: '../../assets/sunspot vocabulary.jpg',
    },
    {
      title: 'Heliosphere',
      description:
        'The vast bubble-like region of space influenced by the Sun’s solar wind.',
      image: '../../assets/heliosphere.jpg',
    },
    {
      title: 'Interplanetary Magnetic Field (IMF)',
      description:
        'The Sun’s magnetic field carried through space by the solar wind.',
      image: '../../assets/interplanetary field.jpg',
    },
    {
      title: 'Satellite Drag',
      description:
        'The effect of increased atmospheric density due to space weather, which slows down satellites.',
      image: '../../assets/satellite drag.jpeg',
    },
    {
      title: 'Radio Blackout',
      description:
        'A disruption in radio communications caused by solar flares affecting the ionosphere.',
      image: '../../assets/radio blackout.jpg',
    },
    {
      title: 'Space Weather Forecasting',
      description:
        'The science of predicting changes in space weather to protect satellites, astronauts, and power systems on Earth.',
      image: '../../assets/space weather vocubulary.webp',
    },
    {
      title: 'Electromagnetic Spectrum',
      description:
        'The range of all types of electromagnetic radiation, including visible light, X-rays, and radio waves.',
      image: '../../assets/electromagnetic spectrum.jpeg',
    },
    {
      title: 'Solar Observatory ',
      description:
        'A space-based or ground-based telescope used to study the Sun’s activity and its effects on space weather.',
      image: '../../assets/solar observatory.webp',
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

  constructor(private location: Location) {}
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
  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
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
