import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NZ_I18N, es_ES, en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { es as esDateLocale, enUS as enUSDateLocale } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    {
      provide: NZ_I18N,
      useFactory: (translate: TranslateService) => {
        const browserLang = translate.getBrowserLang();
        const selectedLang = browserLang && browserLang.match(/en|es/) ? browserLang : 'en';
        return selectedLang === 'es' ? es_ES : en_US;
      },
      deps: [TranslateService]
    }
  ]
})
export class AppComponent {
  selectedLang: string;

  private translate = inject(TranslateService);
  private nzI18nService = inject(NzI18nService);

  constructor() {
    this.translate.addLangs(['en', 'es']);
    const browserLang = this.translate.getBrowserLang();
    this.selectedLang = browserLang && browserLang.match(/en|es/) ? browserLang : 'en';
    this.translate.use(this.selectedLang);
    this.setZorroLocale(this.selectedLang);


    this.translate.onLangChange.subscribe((event) => {
      this.setZorroLocale(event.lang);
    });
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

  private setZorroLocale(lang: string) {
    const zorroLocale = lang === 'es' ? es_ES : en_US;
    const dateFnsLocale = lang === 'es' ? esDateLocale : enUSDateLocale;
    this.nzI18nService.setLocale(zorroLocale);
    this.nzI18nService.setDateLocale(dateFnsLocale);
  }
}
