import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditCardFormComponent } from "./credit-card-form/credit-card-form.component";
import { CardGridComponent } from "./card-grid/card-grid.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'credit-store-app';

  
}
