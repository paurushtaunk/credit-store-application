import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MinorPopupComponent } from "../minor-popup/minor-popup.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-card-form',
  imports: [ReactiveFormsModule, MinorPopupComponent, CommonModule],
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  creditCardForm: FormGroup;
  cardNumber : string = '';
  expiry : string = '';
  cvv : string = '';
customPopup: any;

  constructor(private router: Router, private fb: FormBuilder) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit(): void {
    if (this.creditCardForm.valid) {
      console.log(this.creditCardForm.value);
      // Add logic to handle form submission securely
    }
  }
  goToHome(): void {
    this.router.navigate(['']);
  }

  showPopup(): void{
    if(this.cardNumber){
      alert(`Card Number - ${this.cardNumber},
      Expiry - ${this.expiry}, 
      CVV - ${this.cvv}`);
    }
  }

  resetForm() {
    this.creditCardForm.reset();
  }
}