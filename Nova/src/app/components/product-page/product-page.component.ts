import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  description!: string;
  product!: Product;
  products: Product[] = [];

  
  constructor(private productsService:ProductsService, private rawg:RawgService) {
   }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      for(const item of data) {
        let {productId, title, genre, price, rating, endpoint, platform, imageUrl, cart} = item;
        this.products.push({productId, title, genre, price, rating, endpoint, platform, imageUrl, cart});
        }
    })
  }


}
