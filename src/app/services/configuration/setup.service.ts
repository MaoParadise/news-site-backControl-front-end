import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  data: any;
  API_URI: string = 'http://192.168.43.101:3000/api';

  bodyCredentials: any = {
    observe: 'body',
    withCredentials: true,
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'json'
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAPI_URI(){
    return this.API_URI;
  }

  validateCredentials(){
    this.http.get(`${this.API_URI}/user/auth/check`).subscribe(
      (res)=>{
        this.data = res;
        if(this.data.success == false){
          this.removeLocalStorage();
          window.location.href = "/login";
        }
      },
      (err)=>{
        this.removeLocalStorage();
        window.location.href = "/login";
      }
    )
  }

  makeLocalStorage(bodyInfo: string){
    localStorage.setItem('-bdI-', bodyInfo);
  }

  removeLocalStorage(){
    localStorage.removeItem('-bdI-');

  }

  getLocalUserStorage(){
    return localStorage.getItem('-bdI-');
  }

}
