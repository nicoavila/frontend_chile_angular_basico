import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { ApiService } from './services/api/api.service';
import { ListaPersonajesComponent } from './pages/lista-personajes/lista-personajes.component';
import { DetallePersonajeComponent } from './pages/detalle-personaje/detalle-personaje.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FiltroBusquedaComponent,
    ResultadoBusquedaComponent,
    ListaPersonajesComponent,
    DetallePersonajeComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
