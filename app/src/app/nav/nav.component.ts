import { Component, Input, OnInit} from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

@Input() currentFruit?: Fruit;


}
