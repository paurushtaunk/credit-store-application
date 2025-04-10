import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-grid',
  imports: [CommonModule],
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})

export class CardGridComponent {
  constructor(private router: Router){}
  @Input() cards: Array<{ cardNumber: string, expiryDate: string, cvv: string }> = [];
  
  addACard(): void{
    this.router.navigate(['/add-a-card']);
  }
}