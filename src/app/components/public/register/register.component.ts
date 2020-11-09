import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm:FormGroup
  hide = true
  constructor( private fb: FormBuilder) {

    let registerControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][A-Za-z .']*"),
      ]),
      
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][A-Za-z .']*"),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp1: new FormControl('', [Validators.required]),
      mdp2: new FormControl('', [Validators.required]),  
    }

    this.RegisterForm = fb.group(registerControls);
  }

  ngOnInit(): void {
  }

  get nom() {
    return this.RegisterForm.get('nom');
  }
  get prenom() {
    return this.RegisterForm.get('prenom');
  }
  get email() {
    return this.RegisterForm.get('email');
  }
  get mdp1() {
    return this.RegisterForm.get('mdp1');
  }
  get mdp2() {
    return this.RegisterForm.get('mdp2');
  }

  submit() {
    console.log(this.RegisterForm.value);
  }

}
