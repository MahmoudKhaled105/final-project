import { Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // listCart: Product[] = [];

  // constructor() {
  //   this.checkCart();
  //   this.addCartToHTML();
  // }

  // checkCart() {
  //   const cookieValue = document.cookie.split('; ').find(row => row.startsWith('listCart'));
  //   if (cookieValue) {
  //     this.listCart = JSON.parse(cookieValue.split('=')[1]);
  //   }
  // }

  // addCartToHTML() {
  //   const listCartHTML = document.querySelector('.returnCart .list');
  //   const totalQuantityHTML = document.querySelector('.totalQuantity');
  //   const totalPriceHTML = document.querySelector('.totalPrice');

  //   if (listCartHTML) {
  //     listCartHTML.innerHTML = ''; // Clear existing content
  //   }

  //   let totalQuantity = 0;
  //   let totalPrice = 0;

  //   if (this.listCart && listCartHTML) {
  //     this.listCart.forEach(product => {
  //       if (product) {
  //         const newP = document.createElement('div');
  //         newP.classList.add('item');
  //         newP.innerHTML = `
  //           <img src="" alt="">
  //           <div class="info">
  //             <div class="name">${product.name}</div>
  //             <div class="price">$${product.price}/1 product</div>
  //           </div>
  //           <div class="Quantity">${product.quantity}</div>
  //           <div class="returnprice">$${product.price * product.quantity}</div>`;
  //         listCartHTML.appendChild(newP);

  //         totalQuantity += product.quantity;
  //         totalPrice += product.price * product.quantity;
  //       }
  //     });
  //   }

  //   if (totalQuantityHTML) {
  //     totalQuantityHTML.innerHTML = totalQuantity.toString();
  //   }

  //   if (totalPriceHTML) {
  //     totalPriceHTML.innerHTML = '$' + totalPrice.toFixed(2);
  //   }
  // }
}