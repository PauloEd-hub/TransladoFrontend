import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nome: new FormControl(),
      email: new FormControl()
    })
  }

  onSubmit(){

    const values = this.formGroup.value;

    return values;

  }

}
