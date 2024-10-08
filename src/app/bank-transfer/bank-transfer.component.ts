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
  selector: 'app-bank-transfer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule
  ],
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.sass']
})
export class BankTransferComponent {
  bankTransferForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.bankTransferForm = this.fb.group({
      transfer_receipt: ['', [Validators.required]]
    });
  }

  submit(): void {
    if (this.bankTransferForm.valid) {
      console.log('Bank Transfer Payment Submitted');
      this.navigateToThank();
    } else {
      console.log('Invalid form');
    }
  }
  
  navigateToThank(): void {
    this.router.navigate(['/thank-you']);
  }
}
