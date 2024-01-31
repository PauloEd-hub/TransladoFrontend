import { Component, type OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {

  constructor(private route: Router) {

  }



  ngOnInit(): void { }


  goHome(){
    this.route.navigate(['/'])
  }

  goToVehicles() {
    this.route.navigate(['/ver-veiculos'])
  }

}
