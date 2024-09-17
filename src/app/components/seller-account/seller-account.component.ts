import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seller-account.component.html',
  styleUrl: './seller-account.component.scss'
})
export class SellerAccountComponent {

<<<<<<< HEAD
  isDropdownVisible: boolean = false;


  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

=======
  


>>>>>>> 21b19d1a02d3741b38953998389c5d85e1c4495b
}
