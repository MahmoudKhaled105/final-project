import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ScrollToTopComponent } from "../scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ScrollToTopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
}
