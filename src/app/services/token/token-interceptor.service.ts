import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let tokenizedReq = req.clone({
      withCredentials: true,
      setHeaders: {
        observe: 'body',
        Authorization: `Bearer xx.yy.zz`,
        ContentType : 'application/json',
        responseType: 'json'
      } 
    })
    return next.handle(tokenizedReq);
  }
  
}
