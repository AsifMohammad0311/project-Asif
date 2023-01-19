import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { FoodComponent } from './food/food.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProcessComponent } from './process/process.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'' ,component:LandingpageComponent},
  {path:"login",component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'food',component:FoodComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'cart',component:CartComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'logout',component:LogoutComponent},
  {path:'process',component:ProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
