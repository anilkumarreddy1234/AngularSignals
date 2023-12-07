import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public productsData = toSignal<Product[]>(this.http.get<Product[]>("http://localhost:3002/products"));
  constructor(private http:HttpClient) { }



}
