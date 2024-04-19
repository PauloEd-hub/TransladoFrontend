import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-destino',
  templateUrl: './criar-destino.component.html',
  styleUrls: ['./criar-destino.component.scss'],
})
export class CriarDestinoComponent implements OnInit {

  destinoForm!: FormGroup

  ngOnInit(): void { }

}
