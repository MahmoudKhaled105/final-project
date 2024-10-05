import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { AddToCartService } from '../../service/add-to-cart.service';
import { AddFavouritService } from '../../service/add-favourit.service';
import { RegService } from '../../service/reg.service';
import { GetproductService } from '../../service/getproduct.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-woman',
  standalone: true,
  imports: [CarouselModule, ScrollToTopComponent, NgFor, CurrencyPipe],
  templateUrl: './woman.component.html',
  styleUrl: './woman.component.scss',
})
export class WomanComponent implements OnInit {
  constructor(
    private _AddToCartService: AddToCartService,
    private _AddFavouritService: AddFavouritService,
    private _RegService: RegService,
    private _GetproductService: GetproductService,
    private _ToastrService: ToastrService
  ) {}
  UId: string = '';
  categoryName: any;

  ngOnInit(): void {
    this._GetproductService.getProduct('woman').subscribe({
      next: (response) => {
        this.categoryName = response.data;
        console.log(this.categoryName);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });

    this.UId = this._RegService.IdUser();
  }

  addProdCart(userId: any, id: any): void {
    this._AddToCartService.addToCart(id, userId).subscribe({
      next: (response) => {
        console.log(response);
        console.log(userId, id);
        this._AddToCartService.cartCout.next(response.items.length);
        this._ToastrService.success('Product added successfully to you cart');
      },
      error: (err) => {
        if (err) {
          this._ToastrService.error('this Product already added to your cart');
        }
      },
    });
  }

  addToFavourites(id: any): void {
    const item = {
      prodId: id,
    };
    this._AddFavouritService.addToFav(item).subscribe({
      next: (response) => {
        console.log(response);
        this._AddFavouritService.isFav.next(response.message);
        this._ToastrService.success(
          'Product added successfully to you favourites'
        );
      },
      error: (err) => {
        if (err) {
          this._ToastrService.error('already added to you favourites');
        }
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
}
