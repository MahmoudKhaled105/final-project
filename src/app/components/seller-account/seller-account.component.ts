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

  isDropdownVisible: boolean = false;


  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

}
