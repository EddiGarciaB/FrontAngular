import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.sass'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PaymentFormComponent implements OnInit {
  paymentForm!: FormGroup;
  countries: any[] = [];
  filteredCountries: any[] = [];
  selectedFlag: string | null = null;
  selectedCountryName: string = '';
  selectedCountryCallingCode: string | null = null;
  isDropdownVisible = false;
  isLoading = false;  // Variable para controlar el estado del loader

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.loadCountries();
  }

  loadCountries() {
    this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe(data => {
      this.countries = data.map(country => ({
        name: country.name.common,
        flag: country.flags.png,
        callingCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')
      }));
      this.filteredCountries = [...this.countries];
    });
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm)
    );
    this.isDropdownVisible = true;
  }

  onCountryChange(countryName: string) {
    const selectedCountry = this.countries.find(country => country.name === countryName);
    if (selectedCountry) {
      this.selectedFlag = selectedCountry.flag;
      this.selectedCountryName = selectedCountry.name;
      this.selectedCountryCallingCode = selectedCountry.callingCode;
      this.paymentForm.get('country')?.setValue(this.selectedCountryName);
      this.isDropdownVisible = false;
    }
  }

  hideDropdown() {
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 200);
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  navigateToCreditCard(): void {
    this.router.navigate(['/credit-card']);
  }

  submitForm(): void {
    if (this.paymentForm.valid) {
      this.isLoading = true;  // Activar el loader cuando se hace clic en "Enviar"
      const formData = this.paymentForm.value;

      // Guardar el correo en localStorage
      localStorage.setItem('userEmail', formData.email);
  
      this.http.post('https://app-y928.onrender.com/submit_donation', formData).subscribe(
        response => {
          console.log('Formulario enviado correctamente', response);
          this.isLoading = false;  // Desactivar el loader cuando la solicitud sea exitosa
          this.navigateToCreditCard();
        },
        error => {
          console.error('Error enviando el formulario', error);
          this.isLoading = false;  // Desactivar el loader si hay un error
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
