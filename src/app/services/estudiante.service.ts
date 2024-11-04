import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:8000/api/estudiantes'; // Cambia esto a tu URL de API

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createEstudiante(estudiante: any): Observable<any> {
    return this.http.post(this.apiUrl, estudiante);
  }
}
