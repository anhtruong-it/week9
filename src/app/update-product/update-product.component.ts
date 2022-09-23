import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ProductdataService } from '../services/productdata.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
  animations:[
    trigger('iderrorState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('show => hide', animate('400ms ease-in')),
    ]),
    trigger('noticeState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('show => hide', animate('400ms ease-in')),
    ])
  ]
})
export class UpdateProductComponent implements OnInit {

  productname: string = "";
  productdesc: string = "";
  productprice: number = null;
  productunits: number = null;
  productid: number = null;
  productobjid: string = "";
  newprod: products;
  newProductMessage = "";
  iderrormsg: string = "This id already exists & New ID is required.";
  iderrormsg2: string = "";
  iderrorshow: boolean = false;
  noticeshow: boolean = false;

  product: products;

  paramsub;
  productId="";
  a = [];

  constructor(private proddata: ProductdataService, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
   // this.product = this.route.snapshot.params.this.product2;

   this.getitem();


  }



  updateProduct(event) {
    event.preventDefault();

    if (this.productname == "") { this.productname = this.product.name;}
    if (this.productdesc == "") { this.productdesc = this.product.description;}
    if (this.productprice == null) { this.productprice = this.product.price; }
    if (this.productunits == null) { this.productunits = this.product.units;}
    this.newprod = new products( this.product.id, this.productname, this.productdesc, this.productprice, this.productunits);
    this.a = [this.newprod.id, this.newprod.name, this.newprod.description, this.newprod.price, this.newprod.units]
    alert(this.a);
    /* alert(this.newprod.description);
      alert(this.newprod.id)
      alert(this.newprod.name)
      alert(this.newprod.units)
      alert(this.newprod.price)*/

   /* if (this.productid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {*/
         this.proddata.updateitem(this.newprod).subscribe((data)=> {
        console.log(data);
        this.noticeshow = true;
        if (data.err == null) {
          this.newProductMessage = data.num + " new product (" + this.productname + ") was added";
        } else {
          this.newProductMessage = data.err;
        }
        this.productid = null;
        this.productname = "";
        this.productdesc = "";
        this.productprice = null;
        this.productunits = null;
        this.router.navigateByUrl('/list-product');
      });

   // }
  }

  getitem() {
    this.paramsub = this.route.paramMap.subscribe(params => {
      this.productId = params.get('products._id');
    })
    alert(this.productId);
    this.proddata.getitem(this.productId).subscribe((data)=> {
      this.product = data[0];

    })
  }

  checkvaildid(event) {
    this.noticeshow = false
    this.proddata.checkvalidid(event).subscribe((data)=> {
      if (data.success == 0) {
        this.iderrormsg2 = "  Somethins above " + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      }
      else {
        this.iderrorshow = false;
        this.iderrormsg2 = null;
      }
    });
  }


}
