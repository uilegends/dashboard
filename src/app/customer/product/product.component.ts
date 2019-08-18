import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myclass = 'titleclass';
  productData = [
    { id: 1, name: 'productone', price: 20 },
    { id: 2, name: 'producttwo', price: 30 },
    { id: 3, name: 'productthree', price: 50 },
    { id: 4, name: 'productfour', price: 60 },
    { id: 5, name: 'productfive', price: 70 },
    { id: 6, name: 'productSix', price: 80 }
  ]
  constructor(private route: Router) { }

  ngOnInit() {

  }

  productDetails(keyvalue) {
    this.route.navigate(['profile/product', keyvalue.id])
  }


}
