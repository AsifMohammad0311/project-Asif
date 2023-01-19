import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // data: any;
  // cartItems: any;
  // total: any;
  // txt:any;
  // Razorpay: any;
  data: any;
  cartItems: any=[];
  total: any;
  product:any;
  cnti:any;
  cntd:any;
  txt:any;
  Razorpay: any;
 

  constructor(private service: WatchService,private router: Router) {
    this.total = 0;
   }

  ngOnInit(): void {
    this.cartItems=this.service.cartItems;
    this.cartItems.forEach((product:any)=>{
      this.total+=Number(product.price);
    });
      
    }
    deleteproduct( product: any) {
      this.cartItems.splice(this.cartItems.indexOf(product),1);
      this.total=Number(product.price);
     
  
    
  } 
   options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "",
    "currency": "INR",
    "description": "Acme Corp",
    "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    "prefill":
    {
      "email": "chedalvinay@gmail.com",
      "contact": +918096030447,
    },
    config: {
      display: {
        blocks: {
          hdfc: { //name for HDFC block
            name: "Pay using HDFC Bank",
            instruments: [
              {
                method: "card",
                issuers: ["HDFC"]
              },
              {
                method: "netbanking",
                banks: ["HDFC"]
              },
             
  
            ]
          },
          other: { 
            name: "Other Payment modes",
            instruments: [
              {
                method: "card",
                issuers: ["ICIC"]
              },
              {
                method: 'netbanking',
              },
              {
                method: 'upi'
            },
            ]
          }
        },
        hide: [
          {
          method: "upi"
          }
        ],
        sequence: ["block.hdfc", "block.other"],
        preferences: {
          show_default_blocks: false // Should Checkout show its default blocks?
        }
      }
    },
    "handler": function (response: { razorpay_payment_id: any; }) {
      alert(response.razorpay_payment_id);
    },
    "modal": {
      "ondismiss": function () {
        if (confirm("Are you sure, you want to close the form?")) {
          alert( "You pressed OK!");
          console.log("Checkout form closed by the user");
        } else {
         alert( "You pressed Cancel!");
          console.log("Complete the Payment")
        }
      }
    }
  };
  rzp1: any;
  pay(){
    this.router.navigate(['process']);
    this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
    // this.rzp1.open();
    // this.cartItems.splice(0,this.cartItems.length);
    // this.total=0;
    this.options.amount = String(this.total * 100);
    this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }




}
