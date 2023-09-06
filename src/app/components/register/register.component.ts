import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{

  form = this.fb.group({
    id: [{value:'', disable: true}],
    nome: ['', [Validators.required]],
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
