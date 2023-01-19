import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  biryani: any;
 cart:any;
  service: any;
  constructor(service: WatchService,private router: Router){
   

    
  }
  ngOnInit(): void {
    
  }
  // addcart(product:any){
  //   this.router.navigate(['food']);

  // }
 

}
