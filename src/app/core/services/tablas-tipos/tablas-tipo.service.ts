import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from "rxjs";

const TipoParametro = {
    PAIS_DEFECTO: 199,
}

export class TipoParametroDTO {
    idParametro?: number;
    orden?: string;
    nombreParametro?: string;
    valorParametro?: string;
}

@Injectable({
    providedIn: 'root',
})
export class TablasTipoService {

    /**
     *
     * @param {HttpClient} http agregamos la dependencia de http
     */
    constructor(private http: HttpClient) { }

    /**
     * Método encargado de retornar una tabla tipo listando sus datos.
     * @param {string} key nombre de la tabla tipo, definida en el properties. ej: tipociudad.
     * @returns devuelve la tabla_tipo con sus atributos definidos en el entity.
     */
    findTablaTipo(key: string): Observable<any> {
        const URI = `/api/TablasTipoService?key=${key}`;
        return this.http.get<any>(URI);
    }

    /**
     * Método encargado de retornar una tabla tipo listando sus datos y filtrando por campo y valor.
     * @param {string} key nombre de la tabla tipo, definida en el properties. ej: tipociudad.
     * @param {string} campo nombre del campo por el cual se desea filtrar. ej: departamento.
     * @param {string | number} valor valor del campo por el cual se filtrara (debe ser igual). ej: 1
     * @returns devuelve la tabla_tipo con sus atributos definidos en el entity.
     */
    findTablaTipoFiltrado(key: string, campo: string, valor: string | number): Observable<any> {
        const URI = `/api/TablasTipoService/filtrado?key=${key}&campo=${campo}&valor=${valor}&like=${false}`;
        return this.http.get<any>(URI);
    }

    /**
     * Método encargado de retornar una tabla tipo con el pais configurado en el sistema.
     * @returns devuelve la tabla_tipo con sus atributos del pais.
     */
    findTablaTipoPais(campo = "idparametro"): Observable<TipoParametroDTO[]> {
        return this.findTablaTipoFiltrado("tipoparametro", campo, TipoParametro.PAIS_DEFECTO.toString());
    }

    /**
     * Método encargado de retornar una tabla tipo listando sus datos y filtrando por campo y valor parcial (LIKE).
     * @param {string} key nombre de la tabla tipo, definida en el properties. ej: tipociudad.
     * @param {string} campo nombre del campo por el cual se desea filtrar. ej: departamento.
     * @param {string | number} valor valor del campo por el cual se filtrara (parcialmente igual). ej: 1
     * @returns devuelve la tabla_tipo con sus atributos definidos en el entity.
     */
    findTablaTipoFiltradoWithLike(key: string, campo: string, valor: string): Observable<any> {
        const URI = `/api/TablasTipoService/filtrado?key=${key}&campo=${campo}&valor=${valor}&like=${true}`;
        return this.http.get<any>(URI);
    }

    findTablaTipoAll(key: string, campo: string): Observable<any> {
        const URI = `/api/TablasTipoService/filtradoUpperCase?key=${key}&campo=${campo}&valor=%25&like=${true}`;
        return this.http.get<any>(URI);
    }

    /**
     * Método encargado de retornar el valor de un parametro.
     * @param {string} idParametro identificador en la tabla tipo_parametro.
     * @returns devuelve el contenido del parametro como cadena de texto.
     */
    findParametro(idParametro: number): Observable<string> {
      const URI = `/api/parametro/consultarValorParametro`;
      return this.http.post<string>(URI, {
        idParametro: idParametro,
        valor:null,
      },
      { responseType: 'text' as 'json' });
    }

    /**
     * Método encargado de encontrar un parametro como promesa.
     * Creado el 04/09/2023 a las 13:47:07. <br>
     *
     * @param {string} idParametro identificador en la tabla tipo_parametro.
     * @returns retorna el valor del parametro en forma de string
     */
    async findParametroPromise(idParametro: number): Promise<string>  {
        const URI = `/api/parametro/consultarValorParametro`;
        return lastValueFrom(this.http.post<Promise<string>>(URI, { idParametro: idParametro, valor: null}, { responseType: 'text' as 'json' }));
    }
}