import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  BASE_URL = "auth";
  
  constructor(private http: HttpClient, private router: Router){}

  get name(){
    return localStorage.getItem("name")
  }

  get isAuthenticated(){
    return !!localStorage.getItem("token")
  }

  // get tokenHeader(){
  //   const header = new Headers({'Autorization': 'Bearer '+ localStorage.getItem("token")});
  //   return new RequestOptions({ Headers: header});
  // }

  // user login function with jwt authantication
  login(loginData){
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.http.post<any>(this.BASE_URL+'/login', loginData).subscribe(res => {
        // const data = res;
        if(!res.token) return 
        localStorage.setItem("token", res.token)
        localStorage.setItem("name", res.firstname)
        this.router.navigate(['/']);
      });
  }
  // user create account including the login function at the same time
  register(user){
    delete user.passwordconf;
    this.http.post<any>(this.BASE_URL+'/register', user).subscribe(
      res => {
        this.login(user)
        // const data = res;
        // if(!data.token) return
        // localStorage.setItem("token", data.token)
        // localStorage.setItem("name", data.firstname)
        // this.router.navigate(['/']);
        // sessionStorage.setItem("name", res.firstname)
      });
  }
  // user logout and remove the name and token
  logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("token")
  }
  // check the user if is logged in 
  public get loggedIn(): boolean{
    return localStorage.getItem('token') !==  null;
  }

}