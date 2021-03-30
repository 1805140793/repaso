import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { DetalleformularioComponent } from './detalleformulario/detalleformulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenedorComponent,
    PaginaerrorComponent,
    DetalleformularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
