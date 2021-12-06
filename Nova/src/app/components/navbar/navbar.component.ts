import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  cart = faShoppingCart;
  products: Product[] = [];
  productNames: String[] = [];
  productsService: ProductsService;
  searchForm!: FormGroup;
  username: String | null = sessionStorage.getItem("username");
  message!: String;
  sent!: String;
  subscription!: Subscription;
  test: String = '#Words, :)! ##More Words! ###.MD?';
  navbarOpen = false;


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
      this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
      this.subscription = this.data.sentStatus.subscribe(sent => this.sent = sent)
      // console.log('Before: ', this.test);
      // this.test = this.test.replace(/#/g, '');
      // console.log('After: ', this.test);
    })
  }

  showDropDown = false;

  async toggleSearchOff() {
    setTimeout(() => {
      this.showDropDown = false;
    }, 100)
    //console.log('...timeout passed.');

  }

  //Check If the value of the form group exists or not
  toggleSearchOn() {
    this.showDropDown = !(this.searchForm.value.search === null || this.searchForm.value.search === '');
  }


  constructor( private fb: FormBuilder,
               private _productsService: ProductsService,
               private data: DataService,
               private router: Router,
               private auth: AuthService) {

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
    this.showDropDown = false;
    let a = this.searchForm.value.search;
    this.data.changeMessage(a);
    this.data.changeSent('true');

  }

  selectValue(value: any) {

    this.searchForm.patchValue({"search": value});
    this.showDropDown = false;
    this.searchFor({'search': value})
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * @author Erika Johnson
   * Toggle for menu to display with various screen sizes(Hamburger Menu)
   *
   */

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
    console.log("clicked")
  }

  logout(){
    this.auth.logout()
      .subscribe(resp => {
        if (resp.body == 'Successful Logout')
        {
          sessionStorage.clear();
          console.log("logged out")
          // this.router.navigate(['/'])
        }
      })
  }
}



