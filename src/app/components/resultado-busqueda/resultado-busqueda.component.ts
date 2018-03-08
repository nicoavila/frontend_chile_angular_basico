import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  @Input() personajes;

  constructor() { }

  ngOnInit() {

  }

}
