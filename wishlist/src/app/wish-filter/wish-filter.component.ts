import { Component, OnInit , Input ,Output ,EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishtitem';

const filters = [
  (item:WishItem)=>item,
  (item:WishItem)=>!item.isComplate,
  (item:WishItem)=>item.isComplate,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Input() filter:any;
  @Output() filterChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.updateFilter(this.listFilter);
  }

  listFilter: any = '0';

  updateFilter(value:any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }

}
