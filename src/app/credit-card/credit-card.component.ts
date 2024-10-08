import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule
  ],
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.sass']
})
export class CreditCardComponent {
  creditCardForm: FormGroup;
  isLoading = false;  // Nueva variable para manejar el estado del loader
  participationCode: string = '';  // Nueva variable para manejar el código de participación

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.creditCardForm = this.fb.group({
      cardholder_name: ['', [Validators.required]],
      card_number: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]],
      cvv: ['', [Validators.required]]
    });
  }

  // Generar un código de participación aleatorio
  generateParticipationCode(): void {
    this.participationCode = `PART-${Math.floor(100000 + Math.random() * 900000).toString()}`;
  }

  submit(): void {
    if (this.creditCardForm.valid) {
      this.isLoading = true;  // Activar el loader
      console.log('Payment with Credit Card Submitted');
      
      // Generar el código de participación
      this.generateParticipationCode();
  
      // Guardar el código de participación en localStorage
      localStorage.setItem('participationCode', this.participationCode);
  
      // Obtener el correo electrónico guardado en localStorage
      const email = localStorage.getItem('userEmail');
      
      // Enviar el correo de agradecimiento con el código de participación
      if (email) {
        const data = { 
          email: email, 
          participationCode: this.participationCode  // Enviar también el código de participación
        };
        this.http.post('https://app-y928.onrender.com/send_thank_you_email', data).subscribe(
          response => {
            console.log('Correo de agradecimiento enviado', response);
            this.isLoading = false;  // Desactivar el loader
            this.navigateToThankYou();  // Redirigir a la página de agradecimiento
          },
          error => {
            console.error('Error enviando el correo', error);
            this.isLoading = false;  // Desactivar el loader si ocurre un error
          }
        );
      } else {
        console.error('No se encontró el correo en localStorage');
        this.isLoading = false;  // Desactivar el loader si no se encuentra el correo
      }
    } else {
      console.log('Invalid form');
    }
  }
  
  

  navigateToThankYou(): void {
    this.router.navigate(['/thank-you']);
  }
}
