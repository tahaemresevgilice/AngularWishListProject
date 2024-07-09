import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishtitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items :WishItem[]= [
    new WishItem('to learn Angular'),
    new WishItem('get Coffe',true),
    new WishItem('Find grass that cuts itself')
  ]

  filter: any;
}
