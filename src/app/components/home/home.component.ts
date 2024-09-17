import { RegService } from './../../service/reg.service';
import { ForYouItemService } from './../../service/for-you-item.service';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ScrollToTopComponent } from "../scroll-to-top/scroll-to-top.component";
import { prodForYou } from '../../../Interface/ProductForYou';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GetproductService } from '../../service/getproduct.service';
import { response } from 'express';
import { NavBlankComponent } from '../nav-blank/nav-blank.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    ScrollToTopComponent,
    NgFor,
    CurrencyPipe,
    NgClass,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NavBlankComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private _ForYouItemService: ForYouItemService,
    private _GetproductService: GetproductService,
    private _RegService: RegService
  ) {}

  categoryName: any[] = [];

  prodFor: prodForYou[] = [];
  womanProd: [] = [];
  imgpath: string = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this._ForYouItemService.getItems().subscribe({
      next: (response) => {
        this.prodFor = response.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._GetproductService.getProduct('').subscribe({
      next: (response) => {
        this.categoryName = response.data;
        console.log('Products for category:', '', response);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });

    // this._RegService.saveUser();
  }
  getprodCatName(categName: string): void {
    this._GetproductService.getProduct(categName).subscribe({
      next: (response) => {
        this.categoryName = response.data;
        console.log('Products for category:', categName, response);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

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
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
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
      '<i class="fa-solid fa-chevron-right"></i>',
      '<i class="fa-solid fa-chevron-left"></i>',
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
