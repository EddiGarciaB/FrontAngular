import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paypal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule
  ],
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.sass']
})
export class PayPalComponent {
  paypalForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.paypalForm = this.fb.group({
      paypal_email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (this.paypalForm.valid) {
      console.log('Payment with PayPal Submitted');
    } else {
      console.log('Invalid form');
    }
  }

  navigateToTahnk(): void {
    this.router.navigate(['/thank-you']);
  }
}
