import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'app-prodcutpage',
  templateUrl: './prodcutpage.component.html',
  styleUrls: ['./prodcutpage.component.css']
})
export class ProdcutpageComponent {
  productdeatils:any;
  today = Date.now();
  constructor(public productService:ProductService,private router: Router){
    this.productdeatils = this.productService.cartItem();
  }

  
  removeItme(i:number){
    this.productService.removeProductSignal(i);
  }

}
