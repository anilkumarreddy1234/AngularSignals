import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-prodcutpage',
  templateUrl: './prodcutpage.component.html',
  styleUrls: ['./prodcutpage.component.css']
})
export class ProdcutpageComponent {

  constructor(public productService:ProductService){}


  removeItme(i:number){
    this.productService.removeProductSignal(i);
  }

}
