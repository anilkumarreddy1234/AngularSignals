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
  
   constructor(private http:HttpClient,private _productsService:ProductService,private router: Router,public apiService:ApiService) { this.productsData = [];
    this.productsData = this.apiService.productsData 
  }
   ngOnInit() {
   }
 
   addtocart(id:number){
     const productToAdd = this.productsData().find(
       (product: Product) => product.id === id
     );
     this._productsService.addProductSignal(productToAdd);
   }
 
   buynow(id:number){
     const productToAdd = this.productsData().find(
       (product: Product) => product.id === id
     );
   }
 
   products(order:any){
    // this.router.navigate(['products/productpage']);
   }
 
   sreachKey(){
     console.log("key", this.serach);
     console.log("productdata",this.productsData);
   }
}
