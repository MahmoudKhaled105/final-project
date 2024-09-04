import { ForYouItemService } from './../../service/for-you-item.service';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ScrollToTopComponent } from "../scroll-to-top/scroll-to-top.component";
import { prodForYou } from '../../../Interface/ProductForYou';
import { log } from 'console';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ScrollToTopComponent, NgFor, CurrencyPipe, NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private _ForYouItemService: ForYouItemService) {}

  prodFor: prodForYou[] = [];
  womanProd: [] =[];
  imgpath: string = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this._ForYouItemService.getItems().subscribe({
      next: (response) => {
        this.prodFor = response.results;
        // console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this._ForYouItemService.getProducts().subscribe({
    //   next:(response) =>{
    //     this.womanProd = response.data;
    //   }
    // })
  };

  // womanprod():void{
  //   this.prodFor = this.womanProd;
  // }
  

  offerSilder: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 700,
    // navText: ['', ''],
    items: 1,
    nav: false,
  };

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoplay: false,
    // autoplayTimeout: 2000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };


}
