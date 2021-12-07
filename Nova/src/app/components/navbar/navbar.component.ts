import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import {AuthService} from "../../services/auth.service";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {CurrentUser} from "../../classes/user";
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
import {CurrentUser} from "../../classes/user";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0


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
<<<<<<< HEAD
<<<<<<< HEAD
  // TODO: Change to persisted username
  username: String | null = sessionStorage.getItem("username");
  message!: String;
  sent!: String;
  subscription!: Subscription;
  test: String = '#Words, :)! ##More Words! ###.MD?';
=======
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
  username: String | undefined = CurrentUser.username;
  message!: String;
  sent!: String;
  subscription!: Subscription;
<<<<<<< HEAD
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
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

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
  constructor( private fb: FormBuilder,
               private _productsService: ProductsService,
               private data: DataService,
               private router: Router,
<<<<<<< HEAD
<<<<<<< HEAD
               private auth: AuthService) {

=======
               private auth: AuthService){
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
               private auth: AuthService){
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
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
<<<<<<< HEAD
<<<<<<< HEAD
        if (resp.body == 'Successful Logout')
        {
          sessionStorage.clear();
          console.log("logged out")
          // this.router.navigate(['/'])
=======
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
        console.log(resp);
        if (resp.body == 'Successful Logout')
        {
          sessionStorage.clear();
          this.router.navigate(['/']);
<<<<<<< HEAD
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
        }
      })
  }
}



