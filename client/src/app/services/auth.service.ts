import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthServcice {
  BASE_URL = "auth";
  constructor(private http: HttpClient){}

  login(loginData){
    this.http.post(this.BASE_URL+'/login', loginData).subscribe(res => {
      console.log(res)
    });
  }

  register(user){
    delete user.passwordconf;
    this.http.post(this.BASE_URL+'/register', user).subscribe();
  }
}