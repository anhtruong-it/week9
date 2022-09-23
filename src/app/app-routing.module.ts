import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'update-product/:products._id', component: UpdateProductComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'list-product', component: ListProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
