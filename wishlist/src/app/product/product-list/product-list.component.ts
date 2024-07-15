import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product : any[] = [];
  constructor(private store:ProductService) { }

  ngOnInit(): void {
    this.store.getAllProduct().subscribe(product => {
      this.product = product;
    });
  }

}
