import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minor-popup',
  imports: [CommonModule],
  templateUrl: './minor-popup.component.html',
  styleUrl: './minor-popup.component.scss'
})
export class MinorPopupComponent {
  @Input() formData: any;
  @Output() formsubmitted = new EventEmitter<void>();
  isVisible = false;
  router: any;

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  takeToGrid() {
    this.isVisible = false;
    this.router.navigate(['new']);
    this.formsubmitted.emit();
  }
}
