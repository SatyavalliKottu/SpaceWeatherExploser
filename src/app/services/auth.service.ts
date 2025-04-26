import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api'; // Ensure this matches backend

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { email, password }); // ✅ Ensure POST is used
  }

  signIn(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email }); // ✅ Ensure POST is used
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}); // ✅ Ensure POST is used
  }
}
