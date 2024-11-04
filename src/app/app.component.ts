import { Component } from '@angular/core';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-estudiantes></app-estudiantes>`,
  imports: [EstudiantesComponent]
})
export class AppComponent {}
