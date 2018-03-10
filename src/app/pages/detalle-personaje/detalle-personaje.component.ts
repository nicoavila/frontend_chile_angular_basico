import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  public personaje;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let personajeId = params['id'];
      this.apiService.getCharacter(personajeId).subscribe((personaje) => {
        this.personaje = personaje;
        console.log(personaje);
      });
    });
  }

}
