import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLoginRequest } from 'src/app/interfaces/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  signinForm!: FormGroup;
 
  // email =  new FormControl([null, Validators.required, Validators.email]);
  // senha =  new FormControl([null, Validators.required]);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    })
  }

  onSubmit(){
    let loginRequest:UsuarioLoginRequest = {
      email: this.signinForm.get('email')?.value ,
      senha: this.signinForm.get('senha')?.value
    } 

    return this.authService.loginUsuario(loginRequest).subscribe({
      next: response => {
        if(response) {
          this.route.navigate(['/'])
        }
      },
      error: err => {
        console.log("Erro ao logar com este usuário")
      }
    })






    } 
  }
