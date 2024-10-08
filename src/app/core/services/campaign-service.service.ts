// campaign.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Campaign {
  imageUrl: string;
  title: string;
  country: string;
  amountRaised: number;
  currency: string;
  donors: number;
  endDate: string; // o Date si prefieres trabajar con objetos Date
}

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private campaigns: Campaign[] = [
    {
      imageUrl: 'assets/images/example.png',
      title: 'Ayúdame a construir mi escuela gastronómica social',
      country: 'México',
      amountRaised: 134907,
      currency: 'MXN',
      donors: 206,
      endDate: '2021-09-30'
    },
    {
      imageUrl: 'assets/images/example.jpg',
      title: 'Gánate el carro de los sueños de un artista colombiano',
      country: 'Colombia',
      amountRaised: 250000,
      currency: 'COP',
      donors: 580,
      endDate: '2021-09-30'
    },
    {
      imageUrl: 'assets/images/example.png',
      title: 'Gánate el carro de los sueños de un artista colombiano',
      country: 'Colombia',
      amountRaised: 250000,
      currency: 'COP',
      donors: 580,
      endDate: '2021-09-30'
    }
  ];

  constructor() { }

  getCampaigns(): Observable<Campaign[]> {
    return of(this.campaigns); // Simula una llamada HTTP
  }
}
