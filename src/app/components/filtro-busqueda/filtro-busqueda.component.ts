import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-busqueda',
  templateUrl: './filtro-busqueda.component.html',
  styleUrls: ['./filtro-busqueda.component.css']
})
export class FiltroBusquedaComponent implements OnInit {

  @Output() busqueda: EventEmitter<string> = new EventEmitter<string>();

  constructor(

  ) { }

  ngOnInit() {
  }

}
