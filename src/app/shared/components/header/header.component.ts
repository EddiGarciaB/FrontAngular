import { Component, OnInit } from '@angular/core';
import { NgZorroComponentsModule } from '../../../shared/antd-module/ng-zorro-components.module';
import { ResponseLogin } from '../../../features/login/interfaces/login.interfaces';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgZorroComponentsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  nombreUsuario = '';
  selectedLang: string;
  pipe = new DatePipe('en-US');
  currentLanguage: string = 'HEADER.LANGUAGE.ENGLISH';  // Inicializa currentLanguage

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    const browserLang = translate.getBrowserLang();
    this.selectedLang = browserLang && browserLang.match(/en|es/) ? browserLang : 'es';
    translate.use(this.selectedLang);
    this.updateCurrentLanguage();
  }

  ngOnInit(): void {
    const infoUserJson = sessionStorage.getItem('infoUser');
    if (infoUserJson) {
      const infoUser: ResponseLogin = JSON.parse(infoUserJson);
      const nombres = infoUser.nombres || '';
      const primerApellido = infoUser.primerApellido || '';
      const segundoApellido = infoUser.segundoApellido || '';
      this.nombreUsuario = `${nombres} ${primerApellido} ${segundoApellido}`.trim();
    } else {
      // Manejar el caso en el que infoUser no está en sessionStorage
      this.nombreUsuario = 'Invitado';  // o cualquier valor predeterminado
    }
  }

  getToday() {
    const today = new Date();
    const changedFormat = this.pipe.transform(today, 'dd/MM/YYYY');
    return changedFormat;
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.selectedLang = lang;
    this.translate.use(lang);
  }

  changeLanguage(language: string): void {
    this.selectedLang = language;
    this.translate.use(language);
    this.updateCurrentLanguage();
  }

  updateCurrentLanguage(): void {
    if (this.selectedLang === 'en') {
      this.currentLanguage = 'HEADER.LANGUAGE.ENGLISH';
    } else if (this.selectedLang === 'es') {
      this.currentLanguage = 'HEADER.LANGUAGE.SPANISH';
    }
  }

  logout(): void {
    sessionStorage.removeItem('RolesUser');
    sessionStorage.removeItem('infoUser');
    this.router.navigate(['/']);
  }
}
