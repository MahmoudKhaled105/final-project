import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ScrollToTopComponent } from "../scroll-to-top/scroll-to-top.component";
import { ForYouItemService } from '../../service/for-you-item.service';
import { prodForYou } from '../../../Interface/ProductForYou';
import { log } from 'console';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ScrollToTopComponent, NgFor, CurrencyPipe, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private _ForYouItemService: ForYouItemService) {}

  prodFor: prodForYou[] = [];
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
  }

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
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
}
