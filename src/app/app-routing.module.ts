import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';

const routes: Routes = [
  {path:'formular', component: ContenedorComponent},
  {path:'**', component: PaginaerrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
