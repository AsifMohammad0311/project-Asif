import { Component, OnInit} from '@angular/core';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  fruits: any;
  cart : any;
  staples: any;
  beverages:any;
  clean:any;
  home:any;
  snack:any;


  constructor(private service: WatchService) { 
    this.cart = [];

    this.fruits = [
      //{id: 1001, name:'Apples', price:'99.00/kg', imagePath:'assets/imgs/f6.jpg'},
      //{id: 1002, name:'Oranges', price:'49.00/kg', imagePath:'assets/imgs/f2.jpg'},
      {id: 1003, name:'Kajjur', price:'129.00', imagePath:'assets/imgs/f3.jpg'},
      {id: 1004, name:'Dry Friuts', price:'129.00', imagePath:'assets/imgs/f4.jpg'},
      {id: 1005, name:'Badam', price:'159.00', imagePath:'assets/imgs/f7.jpg'},
      {id: 1006, name:'Banana', price:'79.00', imagePath:'assets/imgs/f8.jpg'},
      {id: 1007, name:'Albukar', price:'59.00', imagePath:'assets/imgs/f10.jpg'},
      {id: 1008, name:'Watermelon', price:'79.00', imagePath:'assets/imgs/f9.jpg'},
      {id: 1009, name:'Mangoes', price:'99.00', imagePath:'assets/imgs/f11.jpg'},

      {id: 1010, name:'Capsicum', price:'39.00', imagePath:'assets/imgs/v1.jpg'},
      {id: 1011, name:'Tomato', price:'49.00', imagePath:'assets/imgs/v2.jpg'},
      {id: 1012, name:'Onions', price:'69.00', imagePath:'assets/imgs/v3.jpg'},
      {id: 1013, name:'Greeny Vegetables', price:'39.00', imagePath:'assets/imgs/v4.jpg'},
      {id: 1014, name:'Carrot', price:'2.00', imagePath:'assets/imgs/v5.jpg'},
      {id: 1016, name:'Green Chilly', price:'25.00', imagePath:'assets/imgs/v7.jpg'},
      {id: 1015, name:'Potato', price:'45.00', imagePath:'assets/imgs/v6.jpg'},
     
      //{id: 1017, name:'Cabbage', price:'30.00/kg', imagePath:'assets/imgs/v8.jpg'},
      {id: 1017, name:'DrumStick', price:'30.00', imagePath:'assets/imgs/v9.jpg'},


     
    ];
    this.staples = [
      {id: 1001,  price:'29.00', imagePath:'assets/imgs/s1.webp'},
      {id: 1002,  price:'49.00', imagePath:'assets/imgs/s2.webp'},
      {id: 1003,  price:'39.00', imagePath:'assets/imgs/s3.webp'},
      {id: 1004,  price:'69.00', imagePath:'assets/imgs/s4.webp'},
      {id: 1005,  price:'54.00', imagePath:'assets/imgs/s5.webp'},
      {id: 1006, price:'87.00', imagePath:'assets/imgs/s6.webp'},
    ];
    this.beverages = [
      {id: 1011, name:'RedBull', price:'45.00' ,desription:'500ml', imagePath:'assets/imgs/b.webp'},
      {id: 1012, name:'Glu-Con D', price:'99.00', desription:'1L',imagePath:'assets/imgs/b1.webp'},
      {id: 1013, name:'Charge', price:'19.00',desription:'250ml', imagePath:'assets/imgs/b2.webp'},
      {id: 1014, name:'Energy Drink', price:'39.00',desription:'250ml',  imagePath:'assets/imgs/b3.webp'},
      {id: 1015, name:'Sports Drink', price:'69.00', desription:'500ml',imagePath:'assets/imgs/b4.webp'},
      {id: 1016, name:'Ornithine', price:'39.00', desription:'500mg', imagePath:'assets/imgs/b5.webp'},
      
      
    ];
    this.clean = [
      {id: 1001, name:'Harpic', price:'99.00', imagePath:'assets/imgs/h1.webp'},
      {id: 1002, name:'Coin', price:'49.00', imagePath:'assets/imgs/h5.webp'},
      {id: 1003, name:'Dettol', price:'129.00', imagePath:'assets/imgs/h9.webp'},
      {id: 1004, name:'SurfExcel', price:'230.00', imagePath:'assets/imgs/h10.webp'},
      {id: 1005, name:'Airel', price:'159.00', imagePath:'assets/imgs/h11.webp'},
      {id: 1006, name:'Comfort', price:'179.00', imagePath:'assets/imgs/h12.webp'},
      {id: 1007, name:'Home Sheets', price:'59.00', imagePath:'assets/imgs/h13.webp'},
      {id: 1008, name:'Kitchen Towel', price:'79.00', imagePath:'assets/imgs/h14.webp'},
      {id: 1009, name:'Aluminum Foil', price:'25', imagePath:'assets/imgs/h15.webp'},
      {id: 1010, name:'Hit Coils', price:'99.00', imagePath:'assets/imgs/h16.webp'},
      {id: 1011, name:'Hit Spray', price:'99.00', imagePath:'assets/imgs/h17.webp'},
      {id: 1012, name:'Odonil', price:'39.00', imagePath:'assets/imgs/h18.webp'},
      
    ];
    this.home= [
      {id: 1001, name:'Stainless Steel Bottle', price:'99.00', imagePath:'assets/imgs/hb1.webp'},
      {id: 1002, name:'Plastic Containers', price:'150.00', imagePath:'assets/imgs/hb2.webp'},
      {id: 1003, name:'Steel Plates', price:'229.00', imagePath:'assets/imgs/hb4.webp'},
      {id: 1004, name:'NonStic Bowl', price:'599.00', imagePath:'assets/imgs/hb5.webp'},
      {id: 1005, name:'Lunch Set', price:'159.00', imagePath:'assets/imgs/hb6.webp'},
      {id: 1006, name:'Plastic HotBox', price:'179.00', imagePath:'assets/imgs/hb7.webp'},
      {id: 1007, name:'Mop Box with stick', price:'359.00', imagePath:'assets/imgs/hb8.webp'},
      {id: 1008, name:'Plastic Wiper', price:'69.00', imagePath:'assets/imgs/hb10.webp'},
      {id: 1009, name:'Tea/Coffe Mug', price:'99.00', imagePath:'assets/imgs/hb34.webp'},
    ];
    this.snack = [
      {id: 1001, name:'Bingo', price:'99.00', imagePath:'assets/imgs/sn1.webp'},
      {id: 1002, name:'Mathri Bhakri Masala', price:'150.00', imagePath:'assets/imgs/sn2.webp'},
      {id: 1003, name:'Butter Murukulu', price:'229.00', imagePath:'assets/imgs/sn3.webp'},
      {id: 1004, name:'Chocolate Mousse', price:'599.00', imagePath:'assets/imgs/sn4.webp'},
      {id: 1005, name:'Chicken Seekh Kebab', price:'159.00', imagePath:'assets/imgs/sn5.webp'},
      {id: 1006, name:'Chocolate CheeseCake', price:'179.00', imagePath:'assets/imgs/sn6.webp'},
      {id: 1007, name:'Koka Instant Noodles', price:'359.00', imagePath:'assets/imgs/sn7.webp'},
      {id: 1008, name:'Tomato ChatPata', price:'69.00', imagePath:'assets/imgs/sn8.webp'},
      {id: 1009, name:'Top Ramen Curry', price:'99.00', imagePath:'assets/imgs/sn9.webp'},
      {id: 1010, name:'Bakery Biscuits', price:'179.00', imagePath:'assets/imgs/sn10.webp'},
      {id: 1011, name:'Dark Chaco-Chip Cokkies', price:'359.00', imagePath:'assets/imgs/sn11.webp'},
      {id: 1012, name:'PineApple Cokkies', price:'69.00', imagePath:'assets/imgs/sn12.webp'},
      {id: 1013, name:'Munch Pack', price:'99.00', imagePath:'assets/imgs/sn13.webp'},

    ];
    
  }

  ngOnInit(): void {
  }
  
  addcart(product : any) {
    this.service.addToCart(product);
    
    // this.cart.push(product);
    // localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }



}



