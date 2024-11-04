import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { DocentesComponent } from './app/docentes/docentes.component';

const routes: Route[] = [
  { path: 'docentes', component: DocentesComponent }, // Define la ruta para DocentesComponent
  { path: '', redirectTo: '/docentes', pathMatch: 'full' }, // Ruta base opcional para redireccionar a docentes
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
