import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  newsData:any;
  resData:any;

  constructor(public http:HttpClient,private cartService:CartService) { }

  ngOnInit(): void{
    const url="https://fakestoreapi.com/products";
    this.http.get(url)
     .subscribe(res=>
      {
       this.resData=res;
       this.resData.forEach((a:any)=>{
         Object.assign(a,{quantity:1,total:a.price})
       })
      // if(this.resData.status=="ok")
   //  {
         this.newsData=this.resData;
         console.log(this.newsData)
      // }
      
      })
  }
  addtocart(n:any)
  {
   this.cartService.addtoCart(n);
  }
  smart="Add to cart"
}