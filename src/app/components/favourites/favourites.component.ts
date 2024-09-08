import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']  // Corrected this line
})
export class FavouritesComponent {

  images: string[] = [
    "../../../assets/images/chewy-fGxiRXr2oZg-unsplash.jpg",
    "../../../assets/images/chewy-fGxiRXr2oZg-unsplash.jpg",
    "../../../assets/images/chewy-fGxiRXr2oZg-unsplash.jpg"
  ];

  imgSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 700,
    items: 1,
    nav: false
  };

}
