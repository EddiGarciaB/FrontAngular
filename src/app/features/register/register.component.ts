import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgZorroComponentsModule } from '../../shared/antd-module/ng-zorro-components.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    NgZorroComponentsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private modal: NzModalService
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Formulario válido, mostrando modal');
      this.showThankYouModal(); // Muestra el modal cuando es válido
    } else {
      console.log('Formulario inválido');
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showThankYouModal(): void {
    this.modal.success({
      nzTitle: '¡Gracias!',
      nzContent: 'Tu campaña ha sido registrada correctamente. Pronto nos pondremos en contacto contigo.',
      nzOnOk: () => this.router.navigate(['/home']) // Redirecciona al home
    });
  }
}
