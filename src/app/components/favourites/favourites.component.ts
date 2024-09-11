import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, AfterViewInit, viewChild, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CarouselModule, CommonModule, NgFor],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'], // Corrected this line
})
export class FavouritesComponent implements AfterViewInit {
  images: object[] = [
    { src: '../../../assets/images/chewy-fGxiRXr2oZg-unsplash.jpg' },
    { src: '../../../assets/images/corinne-kutz-j_9drN8w6gw-unsplash.jpg.jpg' },
    {
      src: '../../../assets/images/joanna-nix-walkup-h3stFPAyn7E-unsplash.jpg',
    },
  ];

  imgSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 2000,
    navSpeed: 700,
    items: 1,
    nav: false,
    autoWidth: false,
    margin: 10,
  };

  @ViewChild('targ') scrollTarget!: ElementRef;
  constructor(private _ActivatedRoute: ActivatedRoute) {}

ngAfterViewInit(): void {
  this._ActivatedRoute.fragment.subscribe(fragment =>{
    if(fragment){
      const element = document.getElementById(fragment);
      if(element){
        element.scrollIntoView({behavior: 'instant'});
      }
    }
  });
}
}
