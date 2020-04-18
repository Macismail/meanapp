import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent {
  form;

  constructor(private fb: FormBuilder, private auth: AuthService){
    this.form = fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordconf: ''
    }, {validator: matchingPassword('password', 'passwordconf')})
  }

  onSubmit(){
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  } 

}

function matchingPassword(field1, field2){
  return form => {
    if(form.controls[field1].value !== form.controls[field2].value){
      return {notmatch: true}
    }
  }
}
