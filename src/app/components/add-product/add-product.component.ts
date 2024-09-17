import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  @ViewChild('imgPreview') imgPreview!: ElementRef;

  
  previewImage(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0]; 

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgElement = document.createElement('img');
        imgElement.src = e.target?.result as string;
        imgElement.alt = 'Product Image Preview';
        imgElement.style.maxWidth = '100%'; 
        imgElement.style.height = 'auto';
        
        
        this.imgPreview.nativeElement.innerHTML = '';
        this.imgPreview.nativeElement.appendChild(imgElement);
      };
      reader.readAsDataURL(file);
    }
  }

}
