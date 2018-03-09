import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() info;
  @Input() paginaActual;
  @Output() seleccionPagina: EventEmitter<number> = new EventEmitter<number>();

  private paginas = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= this.info.pages; i++) {
      this.paginas.push({
        numero: i
      });
    }
  }

  //Emite un evento con el número de la página
  public cambiaPagina(numeroPagina): void {
    this.seleccionPagina.emit(numeroPagina);
  }

}
