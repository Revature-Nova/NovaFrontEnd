import { Component, OnInit } from '@angular/core';
import { RawgService } from 'src/app/services/rawg.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  rawg: RawgService;
  description!: string;
  product!: Product;


  constructor(_rawg:RawgService) {
    this.rawg = _rawg;
   }

  ngOnInit(): void {
  }

  // productDetails(product: Product){
  //   this.rawg.getDetails(product).subscribe(data => {
  //     let details = data.stringify;
  //     console.log(details);
  //   })
  // }
}
