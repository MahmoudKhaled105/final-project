import { response } from 'express';
import { routes } from './../../app.routes';
import { NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { RegService } from '../../service/reg.service';
import { pipe } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { AddToCartService } from '../../service/add-to-cart.service';
import { AddFavouritService } from '../../service/add-favourit.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent implements OnInit {
  // isActive:boolean=false;

  // toggelIcon(){
  //   if(this.isActive == false){
  //     this.isActive=true;
  //   }else{
  //     this.isActive=false
  //   }
  // }

  showProfile: any = '';
  switchlogging: any = '';
  carNum: number = 0;
  userName: any;
  userId: any;
  userFav: any;

  constructor(
    private _Router: Router,
    private _RegService: RegService,
    private _AddToCartService: AddToCartService,
    private _AddFavouritService: AddFavouritService
  ) {}
  ngOnInit(): void {
    this.updateSignInOutStatus();
    this.showProfile = this._RegService.saveUser();
    this.userName = this._RegService.UserName();
    this.userId = this._RegService.IdUser();

    this._AddFavouritService.isFav.subscribe({
      next:(data)=>{
        this.userFav=data;
        // console.log(this.userFav);
        
      }
    });
    this._AddFavouritService.getFav().subscribe({
      next:(response)=>{
        this._AddFavouritService.isFav.next(response);
      }
    })

    this._AddToCartService.cartCout.subscribe({
      next: (data) => {
        this.carNum = data;
      },
    });

    this._AddToCartService.getCartUser(this.userId).subscribe({
      next: (response) => {
        this._AddToCartService.cartCout.next(response.items.length);
      },
    });
  }

  navigateToSection() {
    this._Router.navigate(['/favourites'], { fragment: 'targ' });
  }

  updateSignInOutStatus(): void {
    this.switchlogging = localStorage.getItem('_token')
      ? 'Sign out'
      : 'Sign in';
  }

  signout(): void {
    if (localStorage.getItem('_token')) {
      localStorage.removeItem('_token');

      this._Router.navigate(['/login']);
      // this.switchlogging = "Sign in";
    } else {
      this._Router.navigate(['/login']);
    }
    this.updateSignInOutStatus();
  }
}
