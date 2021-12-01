import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ProductPageComponent } from './components/product-page/product-page.component';


const routes: Routes = [
  {path: 'products/details', component: ProductPageComponent},
  {path: 'products', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
