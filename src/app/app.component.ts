import { Component } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloth_house_project';
  public totalItem:number=0;
  constructor(private cartService:CartService){
     this.cartService.getProduct()
     .subscribe(res=>{
       this.totalItem=res.length;
     })
  }
  
}
