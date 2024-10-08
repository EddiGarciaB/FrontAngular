import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {ReactiveFormsModule,FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {RequestLogin, ResponseLogin} from "./interfaces/login.interfaces";
import { AuthService } from '../../core/services/authentication/auth.service';
import {NgZorroComponentsModule} from '../../shared/antd-module/ng-zorro-components.module'
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroComponentsModule,
    ReactiveFormsModule,
    TranslateModule
   ],
   providers:[
    AuthService

   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder,
              private router: Router,
              private loginService$: AuthService
  ) {
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const request: RequestLogin = {
        username: this.validateForm.get('userName')!.value,
        password: this.validateForm.get('password')!.value
      }
      this.sendLogin(request);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  sendLogin(request: RequestLogin) {
    this.loginService$.login(request).subscribe((res: ResponseLogin) => {
      if (res) {
        const { listRoles, ...dataWithoutRoles } = res;
        sessionStorage.setItem('RolesUser', JSON.stringify(res.listRoles));
        sessionStorage.setItem('infoUser', JSON.stringify(dataWithoutRoles))
        this.router.navigate(['dashboard']);
      } else {
        alert("error de logueo")
      }
    })
  }

}
