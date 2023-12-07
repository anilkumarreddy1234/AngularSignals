import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private api:ApiService) { }
  public cartItem = signal<Product[]>([]);
  public subTotal = computed(() => this.cartItem().reduce((pre:any, curr:Product) =>{
      return pre+curr.price
    },0)
  );
  public totalItems = computed(() => this.cartItem().length);
  
  addProductSignal(product:Product){
    this.cartItem.mutate((val) =>{
      val.push(product);
    })
    this.api.productsData()?.forEach(a => {
      if(a.id == product.id){
        a.stock = a.stock - 1;
      }
    });
  }

  removeProductSignal(id:number){
    this.cartItem.mutate((val) =>{
      const product = val.splice(id, 1);
      this.api.productsData()?.forEach(a => {
        if(a.id == product[0].id){
          a.stock = a.stock + 1;
        }
      });
    })
  }
}
