import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  country: string;
  amount: number;
  currency: string;
}

@Component({
  selector: 'app-donation-summary',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzCardModule,
    NzSelectModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './donation-summary.component.html',
  styleUrls: ['./donation-summary.component.sass']
})
export class DonationSummaryComponent implements OnInit {
  users: User[] = [
    { name: 'Prueba 1', country: 'USA', amount: 500, currency: 'USD' },
    { name: 'Prueba 2', country: 'Canada', amount: 700, currency: 'USD' },
    { name: 'Prueba 3', country: 'Colombia', amount: 300, currency: 'COP' },
    { name: 'Prueba 4', country: 'Colombia', amount: 1000, currency: 'COP' },
    { name: 'Prueba 5', country: 'Mexico', amount: 800, currency: 'USD' },
    { name: 'Prueba 6', country: 'USA', amount: 600, currency: 'USD' },
    { name: 'Prueba 7', country: 'Canada', amount: 500, currency: 'USD' },
    { name: 'Prueba 8', country: 'Colombia', amount: 1200, currency: 'COP' },
    { name: 'Prueba 9', country: 'Mexico', amount: 1100, currency: 'USD' },
    { name: 'Prueba 10', country: 'USA', amount: 700, currency: 'USD' },
    { name: 'Prueba 11', country: 'Canada', amount: 900, currency: 'USD' },
    { name: 'Prueba 12', country: 'Colombia', amount: 400, currency: 'COP' },
    { name: 'Prueba 13', country: 'Colombia', amount: 1500, currency: 'COP' },
    { name: 'Prueba 14', country: 'Mexico', amount: 950, currency: 'USD' },
    { name: 'Prueba 15', country: 'USA', amount: 800, currency: 'USD' },
    { name: 'Prueba 16', country: 'Canada', amount: 650, currency: 'USD' },
    { name: 'Prueba 17', country: 'Colombia', amount: 450, currency: 'COP' },
    { name: 'Prueba 18', country: 'Mexico', amount: 1300, currency: 'USD' },
    { name: 'Prueba 19', country: 'USA', amount: 550, currency: 'USD' },
    { name: 'Prueba 20', country: 'Canada', amount: 750, currency: 'USD' }
  ];
  
  filteredUsers: User[] = [];
  totalAmount: number = 0;
  selectedCurrency: string = 'USD';

  ngOnInit(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => user.currency === this.selectedCurrency);
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.filteredUsers.reduce((acc, user) => acc + user.amount, 0);
  }

  onCurrencyChange(): void {
    this.filterUsers();
  }
}
