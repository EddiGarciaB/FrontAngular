import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BusquedaEvidenciaSend } from '../../../features/dashboard/gestionar-deteccion/interfaces/busquedaEvidenciaSend.interface';
import { DeteccionColaDTO } from '../../../features/dashboard/gestionar-deteccion/interfaces/deteccionColaDTO.interface';
import { DescarteManualInDTO } from '../../../features/dashboard/gestionar-deteccion/interfaces/descarteManualInDTO';
import { AprobadoManualInDTO } from '../../../features/dashboard/gestionar-deteccion/interfaces/AprobadoManualInDTO.interface';
import { AprobarFirmarInDTO } from '../../../features/dashboard/aprobacion-firma/interfaces/aprobacion-detecciones.interface';


@Injectable({
  providedIn: 'root'
})
export class RevisionDeteccionesService {constructor(private http: HttpClient) { }

    /**
     * Método encargado de obtener una detección del sistema de colas.
     * 
     * @param nombreCola nombre de la cola en el gestor de colas.
     * @param cantidadDetecciones cantidad de detecciones a recuperar.
     * @returns retorna una detección que se encuentra en el gestor de colas.
     */
    obtenerDeteccionRevision(nombreCola: string, cantidadDetecciones: number): Observable<DeteccionColaDTO> {
        return this.http.get<DeteccionColaDTO>("/api/gestorCola/obtenerDeteccionRevision", {
            params: {
                nombreCola,
                cantidadDetecciones,
            }
        });

        // return this.http.post( 'http://10.125.96.199:8083/api/gestorCola/obtenerDeteccionRevision', payload).pipe(
        //   map(response => response as ResponseLogin)
        // );
    }

    liberarDeteccionesRevision(): Observable<any> {
        return this.http.get("/api/gestorCola/liberarDeteccionesRevision");
    }

    /**
     * Método encargado de recuperar las evidencias.
     * 
     * @param busqueda criterios de busqueda de evidencia (ruta encriptada)
     * @returns 
     */
    obtenerEvidencia(busqueda: BusquedaEvidenciaSend): Observable<any> {
        return this.http.post("/api/evidencias/getEvidencia", busqueda, {
            observe: 'response',
            responseType: 'blob'
        });
    }

    aprobadoManual(aprobadoManual: AprobadoManualInDTO): Observable<any> {
        return this.http.put("/api/detecciones/aprobadoManual", aprobadoManual);
    }

    /**
     * Método encargado de descartar una detección.
     * 
     * @param descarteManual información necesaria para el descarte
     * @returns 
     */
    descarteManual(descarteManual: DescarteManualInDTO): Observable<any> {
        return this.http.put("/api/detecciones/descarteManual", descarteManual);
    }

    /**
     * Método encargado de descartar una detección.
     * 
     * @param descarteManual información necesaria para el descarte
     * @returns 
     */
    aprobarFirma(aprobarFirma: AprobarFirmarInDTO): Observable<any> {
        return this.http.put("/api/detecciones/aprobarFirma", aprobarFirma);
    }

    getComparendoAprobarFirma(idDeteccion: string, onlyShow: boolean): Observable<any> {
        const options = {
            responseType: 'blob' as 'json',
            params: {
                idDeteccion,
                onlyShow,
            }
          };
        return this.http.get("/api/detecciones/getComparendoAprobarFirma", options);
    }
}
