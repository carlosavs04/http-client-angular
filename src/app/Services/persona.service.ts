import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Persona } from '../Interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personasUrl = 'http://127.0.0.1:8000/api/angular/v1/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.personasUrl, persona)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Un error ha ocurrido:', error.error);
    } else {
      console.error(
        `El backend regresó el código ${error.status}, el body es:`, error.error
      )
    }

    return throwError(() => new Error('Algo malo ha ocurrido; por favor, inténtelo de nuevo más tarde.'));
  }
}
