import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-register-vehicle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './RegisterVehicle.component.html',
  styleUrls: ['./RegisterVehicle.component.scss'],
})
export class RegisterVehicleComponent implements OnInit {

  ngOnInit(): void { }

}
