import {Component, OnDestroy, OnInit} from '@angular/core';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {ProductsService} from 'src/app/services/products.service';
import {Product} from 'src/app/interfaces/product';
import {DataService} from 'src/app/services/data.service';
import {Subscription} from 'rxjs';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpStatusCode} from "@angular/common/http";


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
  username!: String | null;
  message!: String;
  sent!: String;
  subscription!: Subscription;
  navbarOpen = false;

  constructor( private fb: FormBuilder,
               private _productsService: ProductsService,
               private data: DataService,
               private router: Router,
               private auth: AuthService) {
    this.initForm()
    this.productsService = _productsService;
  }

  ngOnInit(): void {
    // To avoid nulls
    const username = sessionStorage.getItem("Username");

    this.username = username;
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
    })
  }

  showDropDown = false;

  async toggleSearchOff() {
    setTimeout(() => {
      this.showDropDown = false;
    }, 100)
  }

  toggleSearchOn() {
    this.showDropDown = !(this.searchForm.value.search === null || this.searchForm.value.search === '');
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

  getCookie(name: string) {
    let username: string | undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      username = parts.pop()?.split(';').shift();
    }

    return username;
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
        if (resp.status == HttpStatusCode.Ok)
        {
          sessionStorage.clear();
          this.router.navigate(['/'])
        }
      })
  }
}



