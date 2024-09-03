import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
<<<<<<< HEAD
import { SellerAccountComponent } from './components/seller-account/seller-account.component';

export const routes: Routes = [
    {path:'', component:AuthLayoutComponent, children: [
        {path:'register', component:RegisterComponent}

    ],},

    
    {path:'home', component:HomeComponent},
    {path:'seller-account', component:SellerAccountComponent}

=======
import { LoginComponent } from './components/login/login.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
>>>>>>> 31ab83715362fcbdcb81ee6c6d4d602c224ddd6d

  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ],
  },
];
