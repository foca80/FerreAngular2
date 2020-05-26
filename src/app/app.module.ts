import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
//para llamar a REST
import { HttpClientModule } from '@angular/common/http';
//para enlazar Form/Component
import {FormsModule}  from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add
    FormsModule//add  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
