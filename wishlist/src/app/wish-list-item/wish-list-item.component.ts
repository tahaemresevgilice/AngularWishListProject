import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishtitem';
import events from './../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
  @Input() wishText : string;
  @Input() fullfilled: boolean;


  @Output() fullfilledChange = new EventEmitter<boolean>();
  constructor() { }

  get cssClasses() {
    // return this.fullfilled ?['strikeout','text-muted'] : [];
    return {'strikeout text-muted':this.fullfilled}
  }
  ngOnInit(): void {
  }

  removeWish(){
    events.emit('removeWish',this.wishText);
  }

  toggleFullFilled(){
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
