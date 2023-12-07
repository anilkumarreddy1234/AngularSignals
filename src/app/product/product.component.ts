import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from './api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productsData: any;
  productNums: any;
  productsWithUSD:number = 0;
  serach:any;
  
   constructor(private http:HttpClient,private _productsService:ProductService,private router: Router,private apiService:ApiService) { this.productsData = [];
    this.productsData = this.apiService.productsData }
   ngOnInit() {
      
    //  this._productsService.getProducts().subscribe((data) => {
    //    this.productsData = data;
    //  });
    //  this._productsService.currentProduct.subscribe(product => {
    //    this.productNums = product;
    //  });
 
    //  this._productsService.orderItemincrease.subscribe(product => {
    //    this.productsWithUSD = product;
    //  });
   }
 
   addtocart(id:number){
     const productToAdd = this.productsData().find(
       (product: Product) => product.id === id
     );
     this._productsService.addProductSignal(productToAdd);

    //  this.productsWithUSD = this.productsWithUSD + productToAdd.price;
    //  this._productsService.productSource.next(productToAdd);
    //  this._productsService.itemincrese.next(this.productsWithUSD);
   }
 
   buynow(id:number){
     const productToAdd = this.productsData().find(
       (product: Product) => product.id === id
     );
    //  this._productsService.buyProductSource.next(productToAdd);
    //  if(productToAdd){
    //    this.router.navigate(['products/productpage']);
    //  }else{
    //    this.router.navigate(['/product']);
    //  }
   }
 
   products(order:any){
    //  this._productsService.buyProductSource.next(order);
     this.router.navigate(['products/productpage']);
   }
 
   sreachKey(){
     console.log("key", this.serach);
     console.log("productdata",this.productsData);
   }
}
