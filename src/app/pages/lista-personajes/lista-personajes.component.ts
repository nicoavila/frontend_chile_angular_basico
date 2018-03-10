import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  public paginaActual = 1;
  public personajes: any = [];
  public infoPaginacion;
  public enablePaginator = true;

  constructor(
    private api: ApiService
  ) {
    this.buscarPersonajes();
  }

  ngOnInit() {
  }

  private buscarPersonajes(page = 1, query = '') {
    if (query != '') {
      this.api.searchCharacters(query).subscribe((personajes: any) => {
        this.personajes = personajes.results;
        this.enablePaginator = false;
      }, (error) => {
        this.personajes = [];
      });
    } else {
      this.api.getCharacters(page).subscribe((personajes: any) => {
        this.enablePaginator = true;
        this.personajes = personajes.results;
        this.infoPaginacion = personajes.info;
      }, (error) => {
        this.personajes = [];
      });
    }
  }

  public cambiaPagina(pagina) {
    this.personajes = [];
    this.paginaActual = pagina;
    this.buscarPersonajes(pagina);
  }

  public realizarBusqueda(query) {
    this.personajes = [];
    this.paginaActual = 1;
    this.buscarPersonajes(null, query);
  }
}
