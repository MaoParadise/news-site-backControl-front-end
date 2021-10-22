import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { SetupService } from '../configuration/setup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URI: string = this._setup.getAPI_URI();

  constructor(
    private http: HttpClient,
    private _setup: SetupService
  ) { }

  logoutUser(){
    return this.http.get(`${this.API_URI}/auth/logout`);
  }

  loggeInInformation(){
    return !!localStorage.getItem('-bdI-');
  }

  getToken(){
    return localStorage.getItem('-trak-');
  } 
}
