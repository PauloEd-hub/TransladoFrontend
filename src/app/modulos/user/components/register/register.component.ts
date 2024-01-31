import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { UsuarioRegisterRequest } from 'src/app/shared/interfaces/Usuario';
import { Route, Router } from '@angular/router';
import { Role } from 'src/app/shared/interfaces/Role';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{

  formSignup!: FormGroup;
  role: string

  // https://www.positronx.io/angular-jwt-user-authentication-tutorial/

 
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router
    ) {
      this.role = "ALUNO"




    }

  ngOnInit(): void {

    this.formSignup = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })

  }


  onSubmit() {
 
      const usuarioRegisterRequest: UsuarioRegisterRequest = {
        nome: this.formSignup.get('nome')?.value,
        email: this.formSignup.get('email')?.value,
        senha:this.formSignup.get('password')?.value,
        role: this.role
       
      }

      this.registerService.registerUser(usuarioRegisterRequest)
      .subscribe({
        next:(response) => {
          if(response) {
            this.router.navigate(["/auth/login"])
            console.log("Valores registro", response)
        }
      },

        error: (error) => {
          console.log("Erro ao cadastrar usuário", error)
        }
      })
  }


}
