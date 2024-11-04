import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = 'http://127.0.0.1:8000/api/docentes'; // URL de la API para docentes

  constructor(private http: HttpClient) {}

  // Método para obtener el listado de docentes
  getDocentes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para registrar un nuevo docente
  createDocente(docente: any): Observable<any> {
    return this.http.post(this.apiUrl, docente);
  }
}
