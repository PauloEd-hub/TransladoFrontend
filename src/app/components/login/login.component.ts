import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  signinForm!: FormGroup;
 
  // email =  new FormControl([null, Validators.required, Validators.email]);
  // senha =  new FormControl([null, Validators.required]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    })


  }

  onSubmit(){
    if(this.signinForm.valid) {
      console.log("Deu certo")
      console.log(this.signinForm.value)
    } 
  }
}
