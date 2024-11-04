import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class EstudiantesComponent implements OnInit {
  estudiantes: any[] = [];
  newEstudiante = { nombre: '', apellido: '', mail: '', carrera: '' };

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(
      (data) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al obtener estudiantes:', error);
      }
    );
  }

  addEstudiante(): void {
    this.estudianteService.createEstudiante(this.newEstudiante).subscribe(
      (data) => {
        this.estudiantes.push(data);
        this.newEstudiante = { nombre: '', apellido: '', mail: '', carrera: '' };
      },
      (error) => {
        console.error('Error al crear estudiante:', error);
      }
    );
  }
}
