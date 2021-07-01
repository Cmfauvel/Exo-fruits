import { Component, OnInit } from '@angular/core';
import { Fruit } from './models/fruit';
import { FruitsService } from './services/fruits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
 currentFruit?: Fruit;
  constructor(private fruitsService: FruitsService) {
  }

  ngOnInit(): void {
    this.fruitsService.currentFruit.subscribe((fruit) => 
    this.currentFruit = fruit);
  }
}
