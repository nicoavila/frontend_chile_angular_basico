import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public personajes: any = [];

  constructor(
    private api: ApiService
  ) {
    this.buscarPersonajes();
  }

  private buscarPersonajes() {
    this.api.getCharacters().subscribe((personajes: any) => {
      this.personajes = personajes.results;
      console.log(personajes);
    });
  }
}
