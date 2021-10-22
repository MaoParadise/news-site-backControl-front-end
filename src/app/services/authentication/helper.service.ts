import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SetupService } from '../configuration/setup.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  API_URI: string = this._setup.getAPI_URI();

  constructor(
    private http: HttpClient,
    private _setup: SetupService
  ) { }

  createHelper(username, name, lastName, email, password){
    return this.http.post(`${this.API_URI}/auth/signup`, {
      username: username,
      name: name,
      lastName: lastName,
      email: email,
      password: password
    },{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  checkUser(username, password, value: boolean){
    return this.http.post(`${this.API_URI}/auth/signin`, {
      username: username,
      password: password,
    },{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

}
