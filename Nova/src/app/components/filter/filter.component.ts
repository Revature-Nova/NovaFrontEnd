import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test } from 'src/app/interfaces/test';
import { MockProduct } from 'src/app/mock-product';
import { Products } from 'src/app/mock-products';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { RawgService } from 'src/app/services/rawg.service';
import { ProductComponent } from '../product/product.component';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  filter:string = "genre";
  value:string = "all";
  products: Product[] = [];
  //Created Sets for Filter Types to Ensure Distinct Values
  genres: Set<string> = new Set();
  platforms: Set<string> = new Set();
  ratings: Set<string> = new Set();
  btnBool: boolean = false;
  filtered!: Product[];
  btnFilter: boolean = false;
  productsService: ProductsService;

  rawg!: RawgService;
  router!: Router;
  selectedProduct!: Product;
  hidden: boolean = false;
  message!: String;
  subscription!: Subscription;
  sent!: String;
  constructor(_productsService: ProductsService, private data: DataService) {
    this.productsService = _productsService;
    // this.rawg = _rawg;
    // this.router = _router;
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      for(const item of data) {
        let {productId, title, genre, price, rating, endpoint, platform, imageUrl, cart} = item;
        this.products.push({productId, title, genre, price, rating, endpoint, platform, imageUrl, cart});
        this.genres = new Set(this.products.map(p => p.genre).sort());
        this.platforms = new Set(this.products.map(p => p.platform).sort());
        this.ratings = new Set(this.products.map(p => p.rating).sort());
      }
    })
    this.subscription = this.data.sentStatus.subscribe(sent => this.sent = sent)
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message);
    console.log(this.sent);
  }

  onClick(product: Product){
    if (!this.btnBool){
      this.rawg.getDetails(product).subscribe(data => {
        ProductComponent.prototype.description = data;
        console.log(data);
      })
      ProductComponent.prototype.product = product;
      this.router.navigate(["/product"]);
    }
    this.btnBool = false;
  }

  test(value: string) :string {
    if (this.sent == 'true') {
      this.products = [];
        this.productsService.searchProduct(value).subscribe(data => {
        for(const item of data) {
          let {productId, title, genre, price, rating, endpoint, platform, imageUrl, cart} = item;
          this.products.push({productId, title, genre, price, rating, endpoint, platform, imageUrl, cart});
          this.genres = new Set(this.products.map(p => p.genre).sort());
          this.platforms = new Set(this.products.map(p => p.platform).sort());
          this.ratings = new Set(this.products.map(p => p.rating).sort());
      }
    });
    console.log(value);
    console.log(this.products);
  }
  
  this.data.changeSent('false');
  return 'works';
  }
  btnClick(){
    this.btnBool = true;
    console.log("Add To Cart");
  }

/* Function for filtering movies on the Front End
    Will Likely Change When Connection to Back End is Made */
  filterProducts(value:string, filter:string){
    this.filtered = [];
    this.btnFilter = true;
    for (let product of this.products){
      if (filter == "genre"){
        if (product.genre == value){
          this.filtered.push(product);
          console.log(product);
        }
      }
      if (filter == "platform"){
        if (product.platform == value){
          this.filtered.push(product);
          console.log(product);
        }
      }
      if (filter == "rating"){
        if (product.rating == value){
          this.filtered.push(product);
          console.log(product);
        }
      }
    }
  }

  /* Function for Filter Reset Button; Resets to Entire List of Products */
  resetFilter(){
    this.btnFilter = false;
    this.filter = "genre";
    this.value = "";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
