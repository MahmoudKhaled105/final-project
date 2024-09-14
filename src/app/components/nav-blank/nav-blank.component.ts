import { routes } from './../../app.routes';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent {
  
  // isActive:boolean=false;

  // toggelIcon(){
  //   if(this.isActive == false){
  //     this.isActive=true;
  //   }else{
  //     this.isActive=false
  //   }
  // }

  constructor(private _Router: Router) {}

  navigateToSection() {
    this._Router.navigate(['/favourites'], { fragment: 'targ' });
  }

 
}
