import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

interface User {
  name: string;
  email: string;
  lastContribution: string;
}

@Component({
  selector: 'app-admon-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzTableModule,
    NzCardModule,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule
  ],
  templateUrl: './admon-usuario.component.html',
  styleUrls: ['./admon-usuario.component.sass']
})
export class AdmonUsuarioComponent implements OnInit {
  users: User[] = [
    { name: 'Prueba 1', email: 'prueba1@example.com', lastContribution: '2024-07-01' },
    { name: 'Prueba 2', email: 'prueba2@example.com', lastContribution: '2024-07-02' },
    { name: 'Prueba 3', email: 'prueba3@example.com', lastContribution: '2024-07-03' },
    { name: 'Prueba 4', email: 'prueba4@example.com', lastContribution: '2024-07-04' },
    { name: 'Prueba 5', email: 'prueba5@example.com', lastContribution: '2024-07-05' },
    { name: 'Prueba 6', email: 'prueba6@example.com', lastContribution: '2024-07-06' },
    { name: 'Prueba 7', email: 'prueba7@example.com', lastContribution: '2024-07-07' },
    { name: 'Prueba 8', email: 'prueba8@example.com', lastContribution: '2024-07-08' },
    { name: 'Prueba 9', email: 'prueba9@example.com', lastContribution: '2024-07-09' },
    { name: 'Prueba 10', email: 'prueba10@example.com', lastContribution: '2024-07-10' },
    { name: 'Prueba 11', email: 'prueba11@example.com', lastContribution: '2024-07-11' },
    { name: 'Prueba 12', email: 'prueba12@example.com', lastContribution: '2024-07-12' },
    { name: 'Prueba 13', email: 'prueba13@example.com', lastContribution: '2024-07-13' },
    { name: 'Prueba 14', email: 'prueba14@example.com', lastContribution: '2024-07-14' },
    { name: 'Prueba 15', email: 'prueba15@example.com', lastContribution: '2024-07-15' },
    { name: 'Prueba 16', email: 'prueba16@example.com', lastContribution: '2024-07-16' },
    { name: 'Prueba 17', email: 'prueba17@example.com', lastContribution: '2024-07-17' },
    { name: 'Prueba 18', email: 'prueba18@example.com', lastContribution: '2024-07-18' },
    { name: 'Prueba 19', email: 'prueba19@example.com', lastContribution: '2024-07-19' },
    { name: 'Prueba 20', email: 'prueba20@example.com', lastContribution: '2024-07-20' }
  ];

  selectedUser: User | null = null;
  isVisible = false;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      newPassword: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  openChangePasswordModal(user: User): void {
    this.selectedUser = user;
    this.isVisible = true;
  }

  closeChangePasswordModal(): void {
    this.selectedUser = null;
    this.isVisible = false;
  }

  changePassword(): void {
    if (this.selectedUser && this.validateForm.valid) {
      // Add logic to change the password here
      alert('Password changed for ' + this.selectedUser.name);
      this.closeChangePasswordModal();
    }
  }
}
