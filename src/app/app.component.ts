import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollToTopComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kashkha';
}
