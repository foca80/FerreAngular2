import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [ 
  {path: 'new', component: CreateProductComponent},
  {path: 'list', component: ProductListComponent},
  {path:'', redirectTo: 'customer', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
