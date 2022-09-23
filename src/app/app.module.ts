import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductdataService } from './services/productdata.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    ListProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
