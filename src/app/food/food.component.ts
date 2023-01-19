import { Component ,OnInit} from '@angular/core';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  tiffins:any;
  biryani: any;
  pureVeg:any;
  pizza:any;
  chinese:any;
  icecreams:any;
  sweets:any;
  cart : any;
  

  constructor(private service: WatchService) { 
    this.cart = [];

    this.tiffins = [
      {id: 1001, name:'Butter Panner Dosa', price:'50.00', imagePath:'assets/imgs/i.jpg'},
      {id: 1002, name:'Tomato Rice', price:'80.00', imagePath:'assets/imgs/tmotoRice.webp'},
      {id: 1003, name:'Mysore Bajji',  price:'39.00', imagePath:'assets/imgs/mysoreBajji.webp'},
      {id: 1004, name:'Dosa',  price:'29.00', imagePath:'assets/imgs/dosa.webp'},
      
      {id: 1005, name:'Vada',    price:'35.00', imagePath:'assets/imgs/vada.webp'},
      {id: 1006, name:'Upma',    price:'30.00', imagePath:'assets/imgs/upma.webp'},
      {id: 1004, name:'Uthappam',    price:'40.00', imagePath:'assets/imgs/uthappam.webp'},
      {id: 1008, name:'Curd Rice',  price:'29.00', imagePath:'assets/imgs/curdRice.webp'},
      {id: 1009, name:'Idli',  price:'45.00', imagePath:'assets/imgs/istockphoto-638506124-612x612.jpg'},
  
      
    ];
    this.biryani= [
      {id: 1001, name:'Chicken Biryani Jumbo', price:'699.00', imagePath:'assets/imgs/c b jumbo.jpg'},
      {id: 1002, name:'Chicken Biryani Single',      price:'149.00', imagePath:'assets/imgs/cb single.jpg'},
      {id: 1003, name:'Egg Biryani Family',    price:'499.00', imagePath:'assets/imgs/egg biryani family.jpg'},
      {id: 1004, name:'Egg Biryani Jumbo',    price:'699.00', imagePath:'assets/imgs/egg biryani jumbo.jpg'},
      {id: 1005, name:'Veg Biryani',    price:'399.00', imagePath:'assets/imgs/food1.jpg'},
      {id: 1006, name:'Special Prwans Biryani',  price:'199.00', imagePath:'assets/imgs/prwans.jpg'},
       {id: 1007, name:'MushRoom Biryani',  price:'229.00', imagePath:'assets/imgs/jlbkydo7zilkypdhfhyt.webp'},
      {id: 1008, name:'Fish Biryani',  price:'329.00', imagePath:'assets/imgs/guedx2anvdkge4jezy3b.webp'},
      {id: 1009, name:'Mutton Biryaani',  price:'259.00', imagePath:'assets/imgs/mutton single.jpg'},
  
      
    ];
    this.pureVeg = [
      {id: 1004, name:'DalMakhani',      price:'89.00', imagePath:'assets/imgs/DalMakhani.webp'},
      {id: 1002, name:'Kaju Jerra Rice',    price:'59.00', imagePath:'assets/imgs/kajuJerraRice.webp'},
      {id: 1003, name:'Crispy Corn',    price:'99.00', imagePath:'assets/imgs/crispycorn.webp'},
      
      {id: 1001, name:'Jeera Rice', price:'69.00', imagePath:'assets/imgs/jeeraRice.webp'},
      {id: 1005, name:'Kaju Pulao',    price:'89.00', imagePath:'assets/imgs/KajuPulao.webp'},
      {id: 1006, name:'Veg Fried Rice',  price:'99.00', imagePath:'assets/imgs/vegFriedRice.webp'},
       {id: 1007, name:'Veg Manchurian(Dry)',  price:'49.00', imagePath:'assets/imgs/VegManchurianDry.webp'},
      {id: 1008, name:'Sambar Rice',  price:'129.00', imagePath:'assets/imgs/mixedSambarRice.webp'},
      {id: 1009, name:'Paneer 65',  price:'199.00', imagePath:'assets/imgs/paneer65.webp'},
  
      
    ];
    this.pizza = [
      {id: 1001, name:'Deluxe Veg Pizza', price:'50.00', imagePath:'assets/imgs/Deluxe_Veggie.jpg'},
      {id: 1002, name:' Double Cheese Margherita Pizza',    price:'399.00', imagePath:'assets/imgs/Double_Cheese_Margherita.jpg'},
      {id: 1003, name:'Panner Pizza',    price:'123.00', imagePath:'assets/imgs/IndianTandooriPaneer.jpg'},
      {id: 1004, name:'Farm House Pizza',    price:'149.00', imagePath:'assets/imgs/Farmhouse.jpg'},
      {id: 1005, name:'Veg Paradise Pizza',      price:'149.00', imagePath:'assets/imgs/Digital_Veggie_Paradise_olo_266x265.jpg'},
      {id: 1006, name:'Margherita Pizza',  price:'199.00', imagePath:'assets/imgs/Margherit.jpg'},
       {id: 1007, name:'Green Wave Pizza',  price:'119.00', imagePath:'assets/imgs/Mexican_Green_Wave.jpg'},
      {id: 1008, name:'Panner Makhni Pizza',  price:'145.00', imagePath:'assets/imgs/p.jpg'},
      {id: 1009, name:'Peppy Panner Pizza',  price:'127.00', imagePath:'assets/imgs/p2.jpg'},
  
      
    ];
    this.chinese = [
      //{id: 1001, name:'Chilli Potato Spicy', price:'62.00', imagePath:'assets/imgs/download (3).jfif'},
      {id: 1002, name:'Chicken Noodles',      price:'78.00', imagePath:'assets/imgs/ChickenHakkaNoodles.jpg'},
      {id: 1003, name:'Chilli Panner(Dry)',    price:'49.00', imagePath:'assets/imgs/ChilliPaneerDry.webp'},
      {id: 1004, name:'Chilli GarlicMushroom',    price:'63.00', imagePath:'assets/imgs/chilliGarlicMushroom[dry].webp'},
      {id: 1005, name:'Egg Fried Rice',    price:'70.00', imagePath:'assets/imgs/FriedEggShangaiNoodles.webp'},
      {id: 1006, name:'Honey Chilli Potato',  price:'54.00', imagePath:'assets/imgs/HoneyChilliPotato.webp'},
       {id: 1007, name:'Veg Hakka Noodles',  price:'85.00', imagePath:'assets/imgs/VegHakkaNoodles.webp'},
      {id: 1008, name:'Shangai Spring Rolls',  price:'120.00', imagePath:'assets/imgs/ShangaiSpringRolls.jpg'},
      {id: 1009, name:'Veg Singapuri Noodles',  price:'95.00', imagePath:'assets/imgs/vegSingapuriNoodles.webp'},
  
      
    ];
    this.icecreams = [
      {id: 1001, name:'Belgian Chocolate ', price:'199.00', imagePath:'assets/imgs/Belgian Chocolate.webp'},
      {id: 1002, name:'Brown Chocolate',      price:'149.00', imagePath:'assets/imgs/Brown Chocolate.webp'},
      {id: 1003, name:'Chocolate Fudge',    price:'139.00', imagePath:'assets/imgs/Chocolate Fudge.webp'},
      {id: 1004, name:'Cotton Candy',    price:'199.00', imagePath:'assets/imgs/Cotton Candy.webp'},
      {id: 1009, name:'Soho Berry Shake',  price:'159.00', imagePath:'assets/imgs/Soho Berry Shake.webp'},
      {id: 1006, name:'KitKat Shake',  price:'149.00', imagePath:'assets/imgs/KitKat Shake.webp'},
       {id: 1007, name:'Mongo Icecream',  price:'129.00', imagePath:'assets/imgs/Mongo Icecream.webp'},
      {id: 1008, name:'Orea Shake',  price:'199.00', imagePath:'assets/imgs/Orea Shake.webp'},
     
      {id: 1005, name:'Dark Chocolate',    price:'179.00', imagePath:'assets/imgs/Dark Chocolate.webp'},
  
      
    ];
   
    this.sweets = [
      
        {id: 1001, name:'Assortment Sweets', price:'49.00', imagePath:'assets/imgs/AssortmentSweets.webp'},
        {id: 1009, name:'Quabani Sweet',  price:'189.00', imagePath:'assets/imgs/QuabaniSweet.webp'},
        {id: 1003, name:'Double Ka Meetha',    price:'199.00', imagePath:'assets/imgs/Doublekameetha.webp'},
        {id: 1004, name:'Mix Sweet',    price:'349.00', imagePath:'assets/imgs/mixsweet.webp'},
        {id: 1005, name:'Pan Sweet',    price:'99.00', imagePath:'assets/imgs/pansweet.webp'},
        {id: 1006, name:'Guvvalu',  price:'249.00', imagePath:'assets/imgs/guvvalu.webp'},
        {id: 1007, name:'Sweet Bondi',    price:'279.00', imagePath:'assets/imgs/sweetBondi.webp'},
        {id: 1008, name:'Sweet Corn',    price:'179.00', imagePath:'assets/imgs/sweetCorn.webp'},
        {id: 1002, name:'Bengali Assortment Sweets',      price:'49.00', imagePath:'assets/imgs/BengaliAssortmentSweets.webp'},
        
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
