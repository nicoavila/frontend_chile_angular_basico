import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-busqueda',
  templateUrl: './filtro-busqueda.component.html',
  styleUrls: ['./filtro-busqueda.component.css']
})
export class FiltroBusquedaComponent implements OnInit {

  @Output() busqueda: EventEmitter<string> = new EventEmitter<string>();

  public buscarForm = new FormGroup({
    query: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  public buscar(form) {
    let query = form.query;
    query = query.toLowerCase().replace(' ', '+');
    this.busqueda.emit(query);
  }
}
