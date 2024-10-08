import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.sass'],
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    NzTableModule,
    NzCardModule,
    CurrencyPipe
  ]
})
export class TablaUsuariosComponent {
  userList = [
    { name: 'John Doe', amount: 50000, email: 'john.doe@example.com' },
    { name: 'Jane Doe', amount: 75000, email: 'jane.doe@example.com' },
    { name: 'Sam Smith', amount: 100000, email: 'sam.smith@example.com' },
    { name: 'Prueba 1', amount: 11000, email: 'prueba1@example.com' },
    { name: 'Prueba 2', amount: 22000, email: 'prueba2@example.com' },
    { name: 'Prueba 3', amount: 33000, email: 'prueba3@example.com' },
    { name: 'Prueba 4', amount: 44000, email: 'prueba4@example.com' },
    { name: 'Prueba 5', amount: 55000, email: 'prueba5@example.com' },
    { name: 'Prueba 6', amount: 66000, email: 'prueba6@example.com' },
    { name: 'Prueba 7', amount: 77000, email: 'prueba7@example.com' },
    { name: 'Prueba 8', amount: 88000, email: 'prueba8@example.com' },
    { name: 'Prueba 9', amount: 99000, email: 'prueba9@example.com' },
    { name: 'Prueba 10', amount: 10000, email: 'prueba10@example.com' },
    { name: 'Prueba 11', amount: 20000, email: 'prueba11@example.com' },
    { name: 'Prueba 12', amount: 30000, email: 'prueba12@example.com' },
    { name: 'Prueba 13', amount: 40000, email: 'prueba13@example.com' },
    { name: 'Prueba 14', amount: 50000, email: 'prueba14@example.com' },
    { name: 'Prueba 15', amount: 60000, email: 'prueba15@example.com' },
    { name: 'Prueba 16', amount: 70000, email: 'prueba16@example.com' },
    { name: 'Prueba 17', amount: 80000, email: 'prueba17@example.com' },
    { name: 'Prueba 18', amount: 90000, email: 'prueba18@example.com' },
    { name: 'Prueba 19', amount: 100000, email: 'prueba19@example.com' },
    { name: 'Prueba 20', amount: 110000, email: 'prueba20@example.com' }
  ];
}
