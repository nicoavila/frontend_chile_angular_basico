import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }


  public getCharacters(page) {
    return this.http.get(environment.endpoint_base_url + '?page=' + page);
  }

  public getCharacter(id) {
    return this.http.get(environment.endpoint_base_url + id);
  }

  public searchCharacters(name) {
    return this.http.get(environment.endpoint_base_url + '?name=' + name);
  }
}
