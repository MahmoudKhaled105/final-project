import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    {path:'', component:AuthLayoutComponent, children: [
        {path:'register', component:RegisterComponent}

    ],},

    
    {path:'home', component:HomeComponent}


];
