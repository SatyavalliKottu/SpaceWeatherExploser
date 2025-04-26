import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-k12',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './k12.component.html',
  styleUrl: './k12.component.scss',
})
export class K12Component {
  constructor(private location: Location, private router: Router) {}
  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
  }

  isPlaying = false;
  isMuted = false;
  duration = 0;
  currentTime = 0;
  controlsVisible = true;
  private hideControlsTimeout: any;

  togglePlayPause() {
    const video: HTMLVideoElement = document.querySelector('video')!;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }

  setDuration(video: HTMLVideoElement) {
    this.duration = video.duration;
  }

  updateProgress(event: Event) {
    const video = event.target as HTMLVideoElement;
    this.currentTime = video.currentTime;
  }

  seek(video: HTMLVideoElement) {
    video.currentTime = this.currentTime;
  }

  toggleFullscreen(video: HTMLVideoElement) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  showControlsTemporarily() {
    this.controlsVisible = true;
    clearTimeout(this.hideControlsTimeout);
    this.hideControlsTimeout = setTimeout(() => {
      this.controlsVisible = false;
    }, 3000);
  }
}
