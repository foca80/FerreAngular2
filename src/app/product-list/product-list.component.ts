import { Component, OnInit } from '@angular/core';
import { Product} from '../model/product';
import { Type } from '../model/type';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product>
  types: Observable<Type>
  fDescription : String

  constructor(private productService: ProductService) { } //inyectando service

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("RELOAD!")
    this.productService.getProductList().subscribe(products => this.products = products);
    this.productService.getTypes().subscribe(types => this.types = types);
  }

  procesarClic(){
     this.productService.getProductsListDescripcion(this.fDescription).subscribe(products => this.products = products);
  }
}
