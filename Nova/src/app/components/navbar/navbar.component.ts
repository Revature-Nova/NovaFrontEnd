import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  cart = faShoppingCart;
  products: Product[] = [];
  productNames: String[] = [];
  productsService: ProductsService;
  searchForm!: FormGroup;
  search: String = '';

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      let setGames: Set<String> = new Set;
      for(const item of data) {
        let {productId, title, genre, price, rating, endpoint, platform, imageUrl, cart} = item;
        this.products.push({productId, title, genre, price, rating, endpoint, platform, imageUrl, cart});
        setGames = new Set(this.products.map(p => p.title));
      }
      for (const title of setGames) {
        this.productNames.push(title);
      }

    })
  }

  showDropDown = false;

  toggleSearchOff() {
    this.showDropDown = false;
  }

  //Check If the value of the form group exists or not
  toggleSearchOn() {
    console.log(this.searchForm.value.search);
    if (this.searchForm.value.search === null || this.searchForm.value.search === '') {
      this.showDropDown = false;
    } else {
      this.showDropDown = true;
    }
  }

  constructor( private fb: FormBuilder, _productsService: ProductsService) {
    this.initForm()
    this.productsService = _productsService;
  }

  initForm(): FormGroup {
    return this.searchForm = this.fb.group({
      search: [null]
    })
  }

  getSearchValue() {
    this.showDropDown = true;
    return this.searchForm.value.search;
    
  }

  searchFor(value: any) {
    let a = this.searchForm.value;
    console.log(a);
  }

  selectValue(value: any) {
    this.searchForm.patchValue({"search": value});
    this.showDropDown = false;
  }

  // states = ['Alabama', 'Alaska',  'Arizona', 'Arkansas', 'California', 'Colorado',
  // 'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
  // , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
  // , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  // 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  // 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  // 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
  //  'West Virginia', 'Wisconsin', 'Wyoming'];

}



