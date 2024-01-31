import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-vehicle',
  templateUrl: './see-vehicle.component.html',
  styleUrls: ['./see-vehicle.component.scss'],
})
export class SeeVehicleComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void { }

  

}
