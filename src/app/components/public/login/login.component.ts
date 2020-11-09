import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup
  hide = true
  constructor(private fb: FormBuilder) { 
    let registerControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required]),
    }
    this.LoginForm = fb.group(registerControls);
  }

  submit() {
    console.log(this.LoginForm.value);
  }

  ngOnInit(): void {
  }

  get email() {
    return this.LoginForm.get('email');
  }
  get mdp() {
    return this.LoginForm.get('mdp');
  }
}
