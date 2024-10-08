import { Injectable } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { enGB, eo, es, ru } from 'date-fns/locale';


interface Locales {
  [key: string]: Locale;
}

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private locales: Locales = { enGB, eo, es, ru };
  private defaultLocale = 'es'; // Locale predeterminado

  constructor() {}

  formatDate(dateString: string, formatStr: string = 'PP'): string {
    const date = parseISO(dateString); // Parseamos la cadena de fecha y hora
    const userLocale = navigator.language || this.defaultLocale;
    const locale = this.locales[userLocale] || this.locales[this.defaultLocale];
    return format(date, formatStr, { locale });
  }
}