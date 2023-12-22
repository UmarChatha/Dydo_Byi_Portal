import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'src/environment/development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  setLanguage(language:string):void{
    localStorage.setItem('language',language);
  }
  getLanguage(){
    return localStorage.getItem('language');
  }

  login(loginData:any){
    return this.http.post((`/authenticate`),loginData)
  }
  
}
