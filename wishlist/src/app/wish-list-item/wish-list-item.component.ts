import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishtitem';
import { EventService } from './../../shared/services/event.service';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
  @Input() wish : WishItem;

  constructor(private events: EventService) { }

  get cssClasses() {
    // return this.fullfilled ?['strikeout','text-muted'] : [];
    return {'strikeout text-muted':this.wish.isComplate};
  }
  ngOnInit(): void {
  }

  removeWish(){
    this.events.emit('removeWish',this.wish);
  }

  toggleFullFilled(){
    this.wish.isComplate = !this.wish.isComplate;
  }
}
