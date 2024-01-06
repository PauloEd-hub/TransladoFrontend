import { Component } from '@angular/core';
import { Veiculo } from 'src/app/shared/interfaces/Veiculo';

@Component({
  selector: 'app-carros',
  templateUrl: '../carros/carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

  veiculos?: Veiculo[];
  veiculo?: Veiculo

  constructor() {
    this.veiculos = [];

  }

}
