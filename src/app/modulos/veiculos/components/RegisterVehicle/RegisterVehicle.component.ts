import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './RegisterVehicle.component.html',
  styleUrls: ['./RegisterVehicle.component.scss'],
})
export class RegisterVehicleComponent implements OnInit {


  formRegisterVehicle!: FormGroup
  ngOnInit(): void { }

}
