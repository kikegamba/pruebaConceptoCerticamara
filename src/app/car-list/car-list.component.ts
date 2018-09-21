import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {
  cars: Array<any>;

  constructor(private carService: CarService,private giphyService: GiphyService) { }

  ngOnInit() {
  console.log("llega");
    this.carService.getAll().subscribe(data => {
	console.log("Antes del data:"+this.cars);
      this.cars = data as Cars[];
	  console.log("Despues del data:"+this.cars);
	  for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
  }
}