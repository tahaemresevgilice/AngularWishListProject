import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishtitem';
import events from './../shared/services/EventService';

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

  constructor(){
    events.listen('removeWish',(wish:any)=>{
      // remove wish item
      console.log(wish);
    })
  }

  filter: any;
}
