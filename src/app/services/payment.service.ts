import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'https://8dde-190-158-28-23.ngrok-free.app/submit_donation';  // Cambia esta URL si el backend está en otra dirección

  constructor(private http: HttpClient) { }

  submitPayment(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers });
  }
}
