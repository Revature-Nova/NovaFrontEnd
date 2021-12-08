import {Component, OnInit} from '@angular/core';
import {RawgService} from 'src/app/services/rawg.service';
import {Product} from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
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
