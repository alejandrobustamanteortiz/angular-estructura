import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()

export class PublicService {
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters').pipe(
      tap(console.log),
      catchError(this.handleError)
    )
  }

  getContinents(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Continents').pipe(
      tap(console.log),
      catchError(this.handleError)
    )

  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    const msg = 'Error status code: ' + error.status + ', status: ' + error.statusText;
    // Utiliza un factory function para crear el error al momento de ser emitido.
    return throwError(() => new Error(msg));
  }
}
