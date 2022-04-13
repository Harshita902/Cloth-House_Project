import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-womenproduct',
  templateUrl: './womenproduct.component.html',
  styleUrls: ['./womenproduct.component.css']
})
export class WomenproductComponent implements OnInit {
  public productList:any;
  public filterCategory:any;
  searchKey:any ="";
  constructor( private cartService: CartService ) { }

  data = [
    {
      'name': 'Tokyo Talkie',
      'category': 'top',
      'image': 'assets/TTTP003742_3.jpg',
      'description':'Vishudh Women Regular Top',
      'price': 499
    },

    {
      'name': 'Tokyo Talkie',
      'category': 'top',
      'image': 'assets/TTSH001200_1.jpg',
      'description':'Tokyo Talkies Women White Voluminous Sleeve Shirt',
      'price': 399
    },
    {
      'name': 'Vishudh',
      'category': 'top',
      'image': 'assets/VNTP000501_1.jpg',
      'description':'Vishudh Women Regular Top',
      'price': 458
    },
    {
      'name': 'Tokyo Talkie',
      'category':'top',
      'image': 'assets/TTTP005014_1.jpg',
      'description':'Tokyo Talkies Women Maroon Knited Top',
      'price': 565
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'top',
      'image': 'assets/TTTP004424_1.jpg',
      'description':'Tokyo Talkies Women Blue Crop Top',
      'price': 458
    },
    {
      'name': 'Vishudh',
      'category': 'top',
      'image': 'assets/VNTP000450_1.jpg',
      'description':'Vishudh Women Regular Top',
      'price': 500
    },
    {
      'name': 'Vishudh',
      'category': 'top',
      'image': 'assets/VNTP000442_2.jpg',
      'description':'Vishudh Women Regular Top',
      'price': 600
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'top',
      'image': 'assets/TTTP004419_3.jpg',
      'description':'Tokyo Talkies Women Pink Crop Top',
      'price': 650
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN000963_1.jpg',
      'description':'Tokyo Talkies Women Black Slim Fit Jeans',
      'price': 430
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN000996_1.jpg',
      'description':'Tokyo Talkies Women Black Slim Fit Jeans',
      'price': 450
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN001103_1.jpg',
      'description':'Tokyo Talkies Women Vintage Fit Jeans',
      'price': 460
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN002873_1.jpg',
      'description':'Tokyo Talkies Women Mauve Regular Fit Jeans',
      'price': 420
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN002904_4.jpg',
      'description':'Tokyo Talkies Women Super Skinny Fit Jeans',
      'price': 400
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN002939_5.jpg',
      'description':'Tokyo Talkies Women Grey Straight Fit Jeans',
      'price': 430
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN002948_1.jpg',
      'description':'Tokyo Talkies Women Olive Mom Fit Jeans',
      'price': 350
    },
    {
      'name': 'Tokyo Talkie',
      'category': 'jeans',
      'image': 'assets/TTJN002975_1.jpg',
      'description':'Tokyo Talkies Women Grey Straight Fit Jeanss',
      'price': 380
    },
  ]

  ngOnInit(): void {
    this.productList = this.data
    this.filterCategory = this.productList
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
