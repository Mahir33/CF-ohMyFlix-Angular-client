import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

apiUrl = 'https://myflix-api-mahir-941afb3e93ba.herokuapp.com';
 
 constructor(private http: HttpClient) {
    this.http = http;
  }
 // User registration
 public userRegistration(userDetails: any) {
  return this.http
    .post(`${this.apiUrl}/users`, userDetails)
    .pipe(catchError(this.handleError));
}
// User login
public userLogin(userDetails: any) {
  return this.http
    .post(`${this.apiUrl}/login`, userDetails)
    .pipe(catchError(this.handleError));
}
// Get all movies
public getAllMovies() {
  return this.http
    .get(`${this.apiUrl}/movies`)
    .pipe(catchError(this.handleError));
}
// Get one movie
public getOneMovie(title: string) {
  return this.http
    .get(`${this.apiUrl}/movies/${title}`)
    .pipe(catchError(this.handleError));
}
// Get director
public getDirector(name: string) {
  return this.http
    .get(`${this.apiUrl}/directors/${name}`)
    .pipe(catchError(this.handleError));
}
// Get genre
public getGenre(name: string) {
  return this.http
    .get(`${this.apiUrl}/genres/${name}`)
    .pipe(catchError(this.handleError));
}
// Get user
public getUser(username: string) {
  return this.http
    .get(`${this.apiUrl}/users/${username}`)
    .pipe(catchError(this.handleError));
}
// Get favorite movies for a user
public getFavoriteMovies(username: string) {
  return this.http
    .get(`${this.apiUrl}/users/${username}/movies`)
    .pipe(catchError(this.handleError));
}
// Add a movie to favorite movies
public addFavoriteMovie(username: string, movieId: string) {
  return this.http
    .post(`${this.apiUrl}/users/${username}/movies/${movieId}`, {})
    .pipe(catchError(this.handleError));
}
// Edit user
public editUser(username: string, userDetails: any) {
  return this.http
    .put(`${this.apiUrl}/users/${username}`, userDetails)
    .pipe(catchError(this.handleError));
}
// Delete user
public deleteUser(username: string) {
  return this.http
    .delete(`${this.apiUrl}/users/${username}`)
    .pipe(catchError(this.handleError));
}
// Delete a movie from favorite movies
public deleteFavoriteMovie(username: string, movieId: string) {
  return this.http
    .delete(`${this.apiUrl}/users/${username}/movies/${movieId}`)
    .pipe(catchError(this.handleError));
}
// Handle API errors

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}