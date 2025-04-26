import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async handleLogin() {
    if (this.loginForm.valid) {
      const { email } = this.loginForm.value;
      try {
        // ✅ Perform login using AuthService
        await this.authService.signIn(email).toPromise();

        // ✅ Store user session
        localStorage.setItem('user', email); // Store email or replace with 'loggedIn'

        // ✅ Call the API to send email notifications
        await this.sendNotification(email, 'login');

        alert('Login successful!');

        // ✅ Navigate to home
        this.router.navigate(['/home']);
      } catch (error: any) {
        alert('Login failed: ' + (error.message || error));
      }
    }
  }

  // ✅ Function to send email notification (Add this function)
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

  redirectToSignup() {
    this.router.navigate(['/signup']);
  }
  goBack(): void {
    this.location.back(); // This will navigate back to the previous page
  }
}
