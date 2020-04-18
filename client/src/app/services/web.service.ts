import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()
export class WebService{
  BASE_URL: "http://localhost:8080/auth";
  constructor(private http: HttpClient, private auth: AuthService){}

  // getuser(){
  //   return this.http.get(this.BASE_URL+"/user/me", this.auth.tokenHeader).pipe(map(res => res.json()))
  // }

}