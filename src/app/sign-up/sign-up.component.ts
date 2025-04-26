import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupForm!: FormGroup; // Ensures it is declared

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  // ✅ Custom Validator to Ensure Password and Confirm Password Match
  passwordMatchValidator: (
    control: AbstractControl
  ) => ValidationErrors | null = (control) => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  };

  async handleSignup() {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      try {
        await this.authService.signUp(email, password).toPromise();
        alert('Signup successful! Redirecting to login...');

        // ✅ Call the API to send email notifications
        await this.sendNotification(email, 'signup');

        this.signupForm.reset(); // ✅ Reset form before navigating

        this.router.navigate(['/login']);
      } catch (error: any) {
        alert('Signup failed: ' + (error.message || error));
      }
    }
  }

  async sendNotification(email: string, type: 'signup' | 'login') {
    const notificationData = {
      userEmail: email,
      professorEmail: 'divyasatyavallik@gmail.com', // Change this to the actual professor's email
      type: type,
    };

    try {
      await fetch('http://localhost:5000/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notificationData),
      });
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.signupForm) {
      this.signupForm.reset(); // ✅ Clear form on destroy
    }
  }
  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
  }
}
