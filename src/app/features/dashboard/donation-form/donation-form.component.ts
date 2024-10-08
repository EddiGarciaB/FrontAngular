import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzCardModule
  ],
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.sass']
})
export class DonationFormComponent implements OnInit {
  validateForm!: FormGroup;
  currencies = [
    { label: 'Dollar', value: 'USD' },
    { label: 'Peso Colombiano', value: 'COP' }
  ];

  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      currency: [null, [Validators.required]],
      targetAmount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
      this.message.success('Form submitted successfully!');
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
