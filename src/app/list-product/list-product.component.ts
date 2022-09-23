import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ProductdataService } from '../services/productdata.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product: products[] = [];
  product2: products;
  constructor(private proddata: ProductdataService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.proddata.getlist().subscribe((data)=> {
      this.product = data;

      //this.a= data[0].name;
     // alert(this.product[0].name);
    })
  }

  deleteproduct(id) {
    if (confirm("Are you sure you want to delete this item")) {
      this.proddata.deleteitem(id).subscribe((data)=> {
        this.product = data;

      });
    }
  }

  getitems(id) {

    /*this.proddata.getitem(id).subscribe((data)=> {
      this.product2 = data[0];
      this.router.navigateByUrl('/update-product/' + this.product2);
    })*/
    this.router.navigateByUrl('/update-product/' + id);

  }

}
