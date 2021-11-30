import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MockProduct } from 'src/app/mock-product';
import { Products } from 'src/app/mock-products';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  cart = faShoppingCart;
  products: MockProduct[] = Products;
  productNames: string[] = this.products.map(p => p.title);

  navbarOpen = false;

  searchForm!: FormGroup;

  ngOnInit(): void {
  }

  showDropDown = false;

  toggleSearchOff() {
    this.showDropDown = false;
  }

  toggleSearchOn() {
    this.showDropDown = true;
  }

  constructor( private fb: FormBuilder) {
    this.initForm()
  }

  initForm(): FormGroup {
    return this.searchForm = this.fb.group({
      search: [null]
    })
  }

  getSearchValue() {
    return this.searchForm.value.search;
  }

  searchFor(value: any) {
    console.log("hi");
  }

  selectValue(value: any) {
    this.searchForm.patchValue({"search": value});
    this.showDropDown = false;
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

  // states = ['Alabama', 'Alaska',  'Arizona', 'Arkansas', 'California', 'Colorado',
  // 'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
  // , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
  // , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  // 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  // 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  // 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
  //  'West Virginia', 'Wisconsin', 'Wyoming'];

}
