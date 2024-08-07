import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishtitem';
import { EventService } from './../../shared/services/event.service';
import { WishService } from './../../shared/services/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  items :WishItem[]= [];

  constructor(private events:EventService,private wishService:WishService){
    events.listen('removeWish',(wish:any)=>{
      // remove wish item
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any)=>{
      this.items = data;
    },
    (error:any) => {
      alert(error.message);
    }
  );
  }

  filter: any;
}
