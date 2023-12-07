import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProdcutpageComponent } from './prodcutpage/prodcutpage.component';

const routes: Routes = [
  {
    path:'',
    component: ProductComponent
  },
  {
    path:'prodcutpage',
    component:ProdcutpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
