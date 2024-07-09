import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishtitem';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
  @Input() wishText : string;
  @Output() fullfilled: boolean;

  @Output() fullFilledChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  toggleFullFilled(item:WishItem){
    this.fullfilled = !this.fullfilled;
    this.fullFilledChange.emit(this.fullfilled);
    console.log(item);
  }
}
