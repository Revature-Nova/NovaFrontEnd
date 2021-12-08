import {Component, OnInit} from '@angular/core';
import {RawgService} from 'src/app/services/rawg.service';
import {Product} from 'src/app/interfaces/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product!: Product;
  description!: string;


  constructor(private router: Router, private rawg: RawgService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    if (this.product == undefined){
      this.router.navigate(['/products']);
    }
  }
}
