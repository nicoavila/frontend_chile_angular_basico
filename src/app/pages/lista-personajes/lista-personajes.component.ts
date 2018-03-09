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

  constructor(
    private api: ApiService
  ) {
    this.buscarPersonajes();
  }

  ngOnInit() {
  }

  private buscarPersonajes(page = 1) {
    this.api.getCharacters(page).subscribe((personajes: any) => {
      this.personajes = personajes.results;
      this.infoPaginacion = personajes.info;
    });
  }

  public cambiaPagina(pagina) {
    this.personajes = [];
    this.paginaActual = pagina;
    this.buscarPersonajes(pagina);
  }
}
