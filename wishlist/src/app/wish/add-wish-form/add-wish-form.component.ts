import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { WishItem } from 'src/shared/models/wishtitem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>();
  constructor() { }

  ngOnInit(): void {
  }

  newWishText = '';

  AddNewWish(){
    // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
