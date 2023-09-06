import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{

  formSignup!: FormGroup;

 
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSignup = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    })

  }


  onSubmitRegister(){
    if(this.formSignup.valid) {
      return console.log(this.formSignup.value);
    }
    else{
      window.alert("Erro ao por campos")

    }
  }
}
