import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  creditCardForm: FormGroup;
  

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
}