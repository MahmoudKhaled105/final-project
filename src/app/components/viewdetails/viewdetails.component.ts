import { NgIf } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-viewdetails',
  standalone: true,
  imports: [NgIf],
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.scss',
})
export class ViewdetailsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const imageZoom = document.getElementById( 'imageZoom' ) as HTMLElement | null;
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
          imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
          imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
        }
      });

      imageZoom.addEventListener('mouseout', () => {
        if (imageZoom) {
          imageZoom.style.setProperty('--display', 'none');
        }
      });
    };

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