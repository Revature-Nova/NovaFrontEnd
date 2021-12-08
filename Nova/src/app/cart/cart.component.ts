import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from '../interfaces/product';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(_productsService: ProductsService) {
    this.productService =_productsService;
  }

  ngOnInit(): void {

    let token: string | null= sessionStorage.getItem("JWT")
    console.log(token)

      console.log(this.productList)
      if (sessionStorage.getItem('cart')) {this.productList = JSON.parse(sessionStorage.getItem('cart') +'')}

  }

  productList: Product[] = [];
  productService: ProductsService;
  subscription!: Subscription;
  quant = 0;
  st = 0;
  tax = 0;
  total = 0;

  checkFunc() :number{
    this.st = 0;
    for (let a of this.productList) {
      this.st = this.st + a.price;
    }
    this.quant = this.productList.length;
    this.tax = this.st * 0.08;
    this.total = this.tax + this.st;
    return 1;
  }

  removeCart(prod: Product) {
    let rm = prod.productId;
    let index = this.productList.indexOf(prod);
    console.log(index);
    this.productList.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.productList))

    alert("Item removed!");
  }
}
