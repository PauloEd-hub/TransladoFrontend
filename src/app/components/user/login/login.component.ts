import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
 
    email =  new FormControl('', [Validators.required, Validators.email]);
    senha =  new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {


  }

  onSubmit(){
    if(this.email) {
      console.log("Deu certo")
      console.log(this.email, this.senha)
    } 
  }
}
