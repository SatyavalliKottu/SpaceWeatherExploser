import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-match-it',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCardModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './match-it.component.html',
  styleUrl: './match-it.component.scss',
})
export class MatchItComponent {
  showIntro = false;
  showMatchIntro = true;
  showGameScreen = false;
  showMatchIt = false;
  showMatchItCorrect = false;
  showCongratsPopup = false;

  isTourMode: boolean = false;
  isGameMode: boolean = false;

  showWrongPopup = false;

  showCongrats = false;
  showWrong = false;

  // userEmail: string = localStorage.getItem('email') || '';
  // username: string = localStorage.getItem('username') || '';
  showCertificate: boolean = false;

  constructor(private http: HttpClient, private location: Location) {}

  leftItems = [
    { id: 1, label: 'SUN', match: 'Glowing Star' },
    { id: 2, label: 'MOON', match: 'Earth’s Satellite' },
    { id: 3, label: 'EARTH', match: 'Our Home Planet' },
    { id: 4, label: 'ATMOSPHERE', match: 'Air around Earth' },
    { id: 5, label: 'AIR', match: 'Invisible Gas Mix' },
    { id: 6, label: 'WATER VAPOUR', match: 'Gaseous Water' },
  ];

  rightItems = [
    'Earth’s Satellite',
    'Our Home Planet',
    'Invisible Gas Mix',
    'Air around Earth',

    'Gaseous Water',
    'Glowing Star',
  ];

  matches: { [key: string]: string } = {};
  feedback: { [key: string]: string } = {};

  onDrop(event: DragEvent, target: string) {
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      this.matches[target] = data;

      const leftMatch = this.leftItems.find(
        (item) => item.label === data
      )?.match;

      const isCorrect = leftMatch === target;
      this.feedback[target] = isCorrect ? 'correct' : 'incorrect';

      if (isCorrect) {
        this.showCongrats = true;
      } else {
        if (this.showMatchItCorrect) {
          this.showWrong = true;
        } else {
          this.feedback[target] = 'incorrect';
        }
      }
    }
  }

  // onDrop(event: DragEvent, target: string) {
  //   if (this.isTourMode) return; // Do nothing in tour mode

  //   const data = event.dataTransfer?.getData('text/plain');
  //   if (data) {
  //     this.matches[target] = data;

  //     const leftMatch = this.leftItems.find(
  //       (item) => item.label === data
  //     )?.match;

  //     const isCorrect = leftMatch === target;
  //     this.feedback[target] = isCorrect ? 'correct' : 'incorrect';

  //     if (isCorrect) {
  //       this.showCongrats = true;
  //     } else {
  //       this.showWrong = true;
  //       setTimeout(() => {
  //         this.goToGameScreen();
  //         this.showWrong = false;
  //       }, 2000);
  //     }
  //   }
  // }

  autoFillCorrectAnswers() {
    this.matches = {};
    this.feedback = {};
    this.leftItems.forEach((item) => {
      this.matches[item.match] = item.label;
      this.feedback[item.match] = 'correct';
    });
  }

  clearMatches() {
    this.matches = {};
    this.feedback = {};
  }

  closePopup() {
    this.showCongrats = false;
    this.showWrong = false;
  }

  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer?.setData('text/plain', item);
  }

  resetScreens() {
    this.showIntro = false;
    this.showMatchIntro = false;
    this.showGameScreen = false;
    this.showMatchIt = false;
    this.showMatchItCorrect = false;
    this.showCongrats = false;
    this.showWrong = false;
  }

  goToMatchIntro() {
    this.resetScreens();
    this.showMatchIntro = true;
  }

  goToGameScreen() {
    this.resetScreens();
    this.matches = {};
    this.feedback = {};
    this.showGameScreen = true;
    this.showCongrats = false;
    this.showWrong = false;
  }

  goToMatchIt() {
    this.resetScreens();

    this.showMatchIt = true;
    this.isTourMode = true;
    this.isGameMode = false;
  }
  goBackFromPopup() {
    this.showWrong = false;
    this.goToGameScreen();
  }

  goToSkip() {
    this.resetScreens();
    this.showMatchItCorrect = true;
    this.isGameMode = true;
    this.isTourMode = false;

    const score = this.getScorePercentage();

    if (score === 100) {
      this.showCertificate = true; // Show certificate UI (optional)
    }
  }

  letsGo() {
    this.resetScreens();
    this.showMatchItCorrect = true;
    console.log(this.matches, this.feedback);
  }

  backToGame() {
    this.goToGameScreen();
  }

  getScorePercentage(): number {
    const total = this.rightItems.length;
    const correct = Object.values(this.feedback).filter(
      (val) => val === 'correct'
    ).length;
    return Math.round((correct / total) * 100);
  }

  closeCertificatePopup() {
    this.showCertificate = false;
    // Reuse your existing method to show skip screen
  }

  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
  }
}
