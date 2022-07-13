import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if (localStorage.getItem("userToken")) {
      this.saveCurrentUser();
    }
   }
  currentUserData:any= new BehaviorSubject(null);
  Url:string = `http://localhost:3000/posts`;
  getApisData():Observable<any>
  {
   return this._HttpClient.get(this.Url);
  }
  getNews():Observable<any>
  {
   return this._HttpClient.get(`https://api.npoint.io/d275425a434e02acf2f7`);
  }
  register(formData:object):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`,formData)
  }

  login(formData:object):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,formData)
  }

  saveCurrentUser()
  {
    let  encodedToken:any = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken)
    console.log(decodedToken);
    this.currentUserData.next(decodedToken);
    
  }
  logout()
  {
    this.currentUserData.next(null);
    localStorage.removeItem("userToken");
    this._Router.navigate(["/login"])

  }


}
