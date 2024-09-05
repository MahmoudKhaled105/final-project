import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SellerAccountComponent } from './components/seller-account/seller-account.component';
import { LoginComponent } from './components/login/login.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
export const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'seller-account', component: SellerAccountComponent },
      { path:'favourites', component: FavouritesComponent},
      {path:'cart', component:CartComponent},
      {path:'viewdetails', component:ViewdetailsComponent},
      {path:'checkout', component:CheckoutComponent},
    ],
  },

];
