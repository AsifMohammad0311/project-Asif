import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
function _window() : any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  get nativeWindow() : any {
    return _window();
 }
  
  cartItems:any;
  productToBeAdded:any;
   isUserLogged : boolean;
  loginStatus : Subject<any>;

  constructor(private httpClient : HttpClient) {
    this.cartItems=[];
    this.productToBeAdded=new Subject();
    this.isUserLogged = false;
    this.loginStatus = new Subject();
   }

   getAllCountries(){
      return this.httpClient.get("https://restcountries.com/v3.1/all");
   }

   getLoginStatus(): any
   {
      return this.loginStatus.asObservable();
   }

   setUserLoggedIn(){
    this.isUserLogged = true;
    this.loginStatus.next(this.isUserLogged);
   }

   setUserLoggedOut(){
    this.isUserLogged = false;
    this.loginStatus.next(this.isUserLogged);
   }

   getUserLogged() : boolean {
    return this.isUserLogged;
   }

   registerUser(user: any) {
    return this.httpClient.post('registerUser', user);
  }

  userLogin(user: any) {
    return this.httpClient.get('userLogin/' + user.emailId + "/" + user.password).toPromise();
  }
  addToCart(product: any) {
    this.cartItems.push(product);
    this.productToBeAdded.next(product);
  }
 

  getCartStatus(): any {
    return this.productToBeAdded.asObservable();
  }
}
