import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServcice} from '../services/auth.service';

@Component({
  selector: 'login',
  template: `
    <div class="container">
      <div class="card" style="width: 40rem;">
        <div class="card-header">
          Login
        </div>
        <div class="card-body text-center">
          <form [formGroup]="loginData" (ngSubmit)="login()">
            <div class="form-row row-space">
              <div class="col-3">Email</div>
                <div class="col-6">
                  <div class="input-group">
                    <input class="input--style-5" type="email" formControlName="email">
                  </div>
              </div>
            </div><br>
            <div class="form-row row-space">
              <div class="col-3">Password</div>
                <div class="col-6">
                  <div class="input-group">
                    <input class="input--style-5" type="password" formControlName="password">
                  </div>
                </div>
            </div><br>
            <div>
              <button class="btn btn-outline-danger btn-sm" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  loginData;

  constructor(private ld: FormBuilder, private auth: AuthServcice){
    this.loginData = ld.group({
      email: '',
      password: ''
    })
  }

  login(){
    // console.log(this.loginData.value);
    this.auth.login(this.loginData.value);
  } 

}
