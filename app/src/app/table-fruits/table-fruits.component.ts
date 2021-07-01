import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../services/fruits.service';
import { Fruit } from '../models/fruit';



@Component({
  selector: 'app-table-fruits',
  templateUrl: './table-fruits.component.html',
  styleUrls: ['./table-fruits.component.scss']
})
export class TableFruitsComponent implements OnInit {
  listFruits?: any[] = [];
  cpt = 0;
  currentFruit: Fruit | undefined;

  constructor(private fruitsService: FruitsService) {
    this.fruitsService.getFruits().subscribe((response) => {
      this.listFruits = response;
    })
  }

  ngOnInit(): void {
    this.getFruits;
    this.fruitsService.currentFruitSubject.subscribe((res) => {
      this.currentFruit = res;
    })
  }

  getFruits(): void {
    this.fruitsService.getFruits().subscribe(fruits => {
      this.listFruits = fruits;
      return this.listFruits;
    })
  }

  updateCurrentFruit() {
    this.fruitsService.emitDataFruit();
    this.fruitsService.currentFruitSubject.subscribe((res) => {
      this.currentFruit = res;
      return this.currentFruit;
    })
  }

  onSortByName() {
    this.cpt++;
    if(this.cpt % 2 != 0) {
      this.listFruits?.sort((a, b) => {
        if (a.name > b.name) {
        return -1;
      } else if (a.name == b.name) {
        return 0;
      }
      return 1;
    });
    } else {
      this.listFruits?.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name == b.name) {
          return 0;
        }
        return -1;
      });
    }
    this.updateCurrentFruit();
  }

  onSortByColor() {
    this.cpt++;
    if(this.cpt % 2 != 0) {
      this.listFruits?.sort((a, b) => {
        if (a.color > b.color) {
          return -1;
        } else if (a.color == b.color) {
          return 0;
        }
        return 1;
      });
    } else {
      this.listFruits?.sort((a, b) => {
        if (a.color > b.color) {
          return 1;
        } else if (a.color == b.color) {
          return 0;
        }
        return -1;
      });
    }
    this.updateCurrentFruit();
  }

  onSortByWeight() {
    this.cpt++;
    if (this.cpt % 2 != 0) {
      this.listFruits?.sort((a, b) => {
        return a.weight - b.weight;
      })
    } else {
      this.listFruits?.sort((a, b) => {
        return b.weight - a.weight;
      })
    }
    this.updateCurrentFruit();
  }

  onSortByPrice() {
    this.cpt++;
    if (this.cpt % 2 != 0) {
      this.listFruits?.sort((a, b) => {
        return a.price - b.price;
      })
    } else {
      this.listFruits?.sort((a, b) => {
        return b.price - a.price;
      })
    }
    this.updateCurrentFruit();
  }
}
