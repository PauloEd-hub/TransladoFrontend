import { Component } from '@angular/core';
import { Veiculo } from 'src/app/interfaces/Veiculo';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

  veiculos?: Veiculo[];
  veiculo?: Veiculo

  constructor() {
    this.veiculos = [];

  }

}
