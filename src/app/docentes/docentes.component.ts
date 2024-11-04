import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docentes',
  standalone: true,
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class DocentesComponent implements OnInit {
  docentes: any[] = [];
  newDocente = { nombre: '', apellido: '', mail: '', especialidad: '' };

  constructor(private docenteService: DocenteService) {}

  ngOnInit(): void {
    this.getDocentes();
  }

  // Método para obtener el listado de docentes
  getDocentes(): void {
    this.docenteService.getDocentes().subscribe(
      (data) => {
        this.docentes = data;
      },
      (error) => {
        console.error('Error al obtener docentes:', error);
      }
    );
  }

  // Método para registrar un nuevo docente
  addDocente(): void {
    this.docenteService.createDocente(this.newDocente).subscribe(
      (data) => {
        this.docentes.push(data); // Añadir el nuevo docente a la lista
        this.newDocente = { nombre: '', apellido: '', mail: '', especialidad: '' }; // Limpiar el formulario
      },
      (error) => {
        console.error('Error al crear docente:', error);
      }
    );
  }
}
