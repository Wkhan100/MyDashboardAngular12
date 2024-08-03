import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Define the type of the user if you have a User interface
  // For example, interface User { id: number; name: string; }
  // private handleError method to handle HTTP errors
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }

  getAllUsers(): Observable<any[]> {
    const url = `${this.baseUrl}users`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  createUser(data:any): Observable<any> {
    let body={
      username: data.username,
      password: data.password
    }
    const url = `${this.baseUrl}users`;
    return this.http.post<any>(url, body).pipe(
      catchError(this.handleError)
    )
  }
}
