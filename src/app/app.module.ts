import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component'
import { ToastrModule } from 'ngx-toastr';
import { FoodComponent } from './food/food.component';
import { GroceryComponent } from './grocery/grocery.component';
import { CartComponent } from './cart/cart.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProcessComponent } from './process/process.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AboutusComponent,
    HomeComponent,
    LogoutComponent,
    FoodComponent,
    GroceryComponent,
    CartComponent,
    LandingpageComponent,
    ProcessComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
