import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

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

    this.productList = [];
      this.productService.searchProduct('terr').subscribe((data) => {
        for (const item of data) {
          let {
            productId,
            title,
            genre,
            price,
            rating,
            endpoint,
            platform,
            imageUrl,
            cart,
          } = item;
          this.productList.push({
            productId,
            title,
            genre,
            price,
            rating,
            endpoint,
            platform,
            imageUrl,
            cart,
          });
        }
      })
      console.log(this.productList)
  }
  quant = 2;
  st = 60;
  tax = this.st * 0.08;
  total = this.st + this.tax;
  productList: Product[] = [];
  productService: ProductsService;
  subscription!: Subscription;
}
