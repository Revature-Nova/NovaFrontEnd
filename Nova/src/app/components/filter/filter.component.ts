import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test } from 'src/app/interfaces/test';
import { MockProduct } from 'src/app/mock-product';
import { Products } from 'src/app/mock-products';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filter:string = "genre";
  value:string = "all";
  products: MockProduct[] = Products;
  btnBool: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if (!this.btnBool){
      console.log("To Product Page");
    }
    this.btnBool = false;
  }

  btnClick(){
    this.btnBool = true;
    console.log("Add To Cart");
  }

  filterProducts(){
    
  }

}
