import { NgFor, NgIf, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ViewDetailsService } from '../../service/view-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopOwnerDataService } from '../../service/shop-owner-data.service';
import { AddToCartService } from '../../service/add-to-cart.service';
import { AddFavouritService } from '../../service/add-favourit.service';
import { ToastrService } from 'ngx-toastr';
import { RegService } from '../../service/reg.service';

@Component({
  selector: 'app-viewdetails',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.scss',
})
export class ViewdetailsComponent implements AfterViewInit, OnInit {
  sanitizer: any;
  constructor(
    private _ViewDetailsService: ViewDetailsService,
    private _ActivatedRoute: ActivatedRoute,
    private _Renderer2: Renderer2,
    private el: ElementRef,
    private _ShopOwnerDataService: ShopOwnerDataService,
    private _Router: Router,
    private _AddToCartService: AddToCartService,
    private _AddFavouritService: AddFavouritService,
    private _ToastrService: ToastrService,
    private _RegService: RegService
  ) {}

  productDetails: any = null;
  productId: any | null = '';
  UId: string = '';

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
      },
    });
    this._ViewDetailsService.viewProd(this.productId).subscribe({
      next: (response) => {
        console.log(response.data);
        this.productDetails = response.data;
      },
    });

    this.UId = this._RegService.IdUser();
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

  getShop(id: any): void {
    console.log('Fetching shop with ID:', id);
    this._ShopOwnerDataService.getShopById(id).subscribe({
      next: (response) => {
        console.log(response);
        if (response) {
          console.log(response);

          this._Router.navigate(['seller-account', id]);
        }
      },
      error: (error) => {
        console.error('Error fetching shop:', error);
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side error:', error.error.message);
        } else {
          console.error(
            `Server-side error: ${error.status} ${error.statusText}`
          );
          console.error('Error body:', error.error);
        }
      },
    });
  }

  ngAfterViewInit(): void {
    const imageZoom = document.getElementById(
      'imageZoom'
    ) as HTMLElement | null;
    const imagZoom = document.getElementById('imagZoom') as HTMLElement | null;

    if (imageZoom) {
      imageZoom.addEventListener('mousemove', (event: MouseEvent) => {
        if (imageZoom) {
          imageZoom.style.setProperty('--display', 'block');
          const rect = imageZoom.getBoundingClientRect();
          const pointer = {
            x: ((event.clientX - rect.left) * 100) / rect.width,
            y: ((event.clientY - rect.top) * 100) / rect.height,
          };
          // console.log(pointer);

          imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
          imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
        }
      });

      imageZoom.addEventListener('mouseout', () => {
        if (imageZoom) {
          imageZoom.style.setProperty('--display', 'none');
        }
      });
    }

    if (imagZoom) {
      imagZoom.addEventListener('mousemove', (event: MouseEvent) => {
        if (imagZoom) {
          imagZoom.style.setProperty('--display', 'block');
          const rect = imagZoom.getBoundingClientRect();
          const pointer = {
            x: ((event.clientX - rect.left) * 100) / rect.width,
            y: ((event.clientY - rect.top) * 100) / rect.height,
          };
          imagZoom.style.setProperty('--zoom-x', pointer.x + '%');
          imagZoom.style.setProperty('--zoom-y', pointer.y + '%');
        } else {
          console.log('img not found');
        }
      });

      imagZoom.addEventListener('mouseout', () => {
        if (imagZoom) {
          imagZoom.style.setProperty('--display', 'none');
        }
      });
    }
  }
}