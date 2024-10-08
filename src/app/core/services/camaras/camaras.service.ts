import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCamaraInfraccionDTO } from '../../../features/dashboard/admon-camaras/interfaces/tipoCamaraInfraccionDTO.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamarasService {constructor(private http: HttpClient) { }

    findAll():Observable<TipoCamaraInfraccionDTO>{
        return this.http.get<TipoCamaraInfraccionDTO>("/camaras/");
    }

    getPDF(id: number): Observable<any>{
        return this.http.get("/camaras/certificado/"+id, {responseType: 'text'});
    }

    
}
 