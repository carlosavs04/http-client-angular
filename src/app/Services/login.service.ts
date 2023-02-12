import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Interfaces/persona.interface';
import { User } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://127.0.0.1:8000/api/angular/v1/login'
  token?: string

  constructor(private _http: HttpClient) { }

   logIn(user : User){
    this._http.post(this.url,user).subscribe((response:any)=>{
      localStorage.setItem('token',response.data.token)
    })
  }

}
