import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { UsuarioRegisterRequest } from 'src/app/interfaces/Usuario';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{

  formSignup!: FormGroup;

  // https://www.positronx.io/angular-jwt-user-authentication-tutorial/

 
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router
    
    
    
    ) {}

  ngOnInit(): void {

    this.formSignup = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    })

  }


  onSubmit() {
 
      const usuarioRegisterRequest: UsuarioRegisterRequest = {
        nome: this.formSignup.get('nome')?.value,
        email: this.formSignup.get('email')?.value,
        senha:this.formSignup.get('senha')?.value,
       
      }

      this.registerService.registerUser(usuarioRegisterRequest)
      .subscribe({
        next:(response) => {
          if(response) {
            this.router.navigate(["/login"])
            console.log("Valores registro", response)
        }
      },

        error: (error) => {
          console.log("Erro ao cadastrar usuário", error)
        }
      })
  }


}
