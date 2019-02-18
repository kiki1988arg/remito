import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  parseDateByCulture(date: string, culture: string): any {
    switch(culture)
    {
      case 'es-AR':
      case 'pt-PT':
      case 'it-IT':
      case 'ro-RO':
      {
        return moment(date).format('DD/MM/YYYY');
        break;
      }
      case 'es-MX':
      case 'en-US':
      default:
      {
        return moment(date).format('MM/DD/YYYY');
        break;
      }
    }
  }
}