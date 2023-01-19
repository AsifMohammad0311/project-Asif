import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {


  cart:any;
  service: any;
  fruits: any;
  snack: any;
  tiffins: any;
  biryani:any;
  constructor( service:WatchService,private router: Router){
    this.cart = [];
    this.fruits = [
     
      {id: 1009, name:'Mangoes', price:'99.00', imagePath:'assets/imgs/f11.jpg'},
      {id: 1010, name:'Capsicum', price:'39.00', imagePath:'assets/imgs/v1.jpg'},
      {id: 1011, name:'Tomato', price:'49.00', imagePath:'assets/imgs/v2.jpg'},
    ];
    this.snack = [
      {id: 1001, name:'Bingo', price:'99.00', imagePath:'assets/imgs/sn1.webp'},
      {id: 1002, name:'Mathri Bhakri Masala', price:'150.00', imagePath:'assets/imgs/sn2.webp'},
      {id: 1003, name:'Butter Murukulu', price:'229.00', imagePath:'assets/imgs/sn3.webp'},
    ];
    this.tiffins = [
      {id: 1001, name:'Butter Panner Dosa', price:'50.00', imagePath:'assets/imgs/i.jpg'},
      {id: 1004, name:'Uthappam',    price:'40.00', imagePath:'assets/imgs/uthappam.webp'}, 
      {id: 1009, name:'Idli',  price:'45.00', imagePath:'assets/imgs/istockphoto-638506124-612x612.jpg'}, 
    ];
    this.biryani= [
      {id: 1001, name:'Chicken Biryani Jumbo', price:'699.00', imagePath:'assets/imgs/c b jumbo.jpg'},
      {id: 1002, name:'Chicken Biryani Single',      price:'149.00', imagePath:'assets/imgs/cb single.jpg'},
      {id: 1003, name:'Egg Biryani Family',    price:'499.00', imagePath:'assets/imgs/egg biryani family.jpg'},
    ];
   



  }
  ngOnInit(): void {
    
  }
  addcart(product:any){  

  }
  buy(product:any){
    this.router.navigate(['login']);

  }

}
