import { Component } from '@angular/core';
import { ProductService } from './product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularsignals';
  constructor(public productService: ProductService,private router: Router ){}

  orderlist(){
    this.router.navigate(['/orderlist']);
  }
}
