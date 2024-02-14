import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-translado',
  templateUrl: './create-translado.component.html',
  styleUrls: ['./create-translado.component.scss'],
})
export class CreateTransladoComponent implements OnInit {

  formRegisterTranslado!:FormGroup

  ngOnInit(): void { }

}
