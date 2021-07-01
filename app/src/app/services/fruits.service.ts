import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { Fruit } from '../models/fruit';
import { initialFruits } from '../models/mock-fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  public currentFruitSubject: BehaviorSubject<Fruit>;
  fruits = initialFruits;
  public currentFruit: Observable<Fruit>;

  constructor() {
    this.currentFruitSubject = new BehaviorSubject<Fruit>(this.fruits[0]);
    this.currentFruit = this.currentFruitSubject.asObservable();
  }

  emitDataFruit() {
    this.getFruits().subscribe((response) => {
      this.currentFruitSubject.next(response[0]);
    });
  }

  getFruits(): Observable<any[]> {
    const fruits = of(initialFruits);
    return fruits;
  }






}
