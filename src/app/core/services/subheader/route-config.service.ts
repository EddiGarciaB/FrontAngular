import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RouteConfig } from '../../../shared/components/subheader/interfaces/route-config.interface';
import { MOCK_ROUTE_CONFIG } from '../../../shared/components/subheader/mocks/route-config.mock';

@Injectable({
  providedIn: 'root'
})
export class RouteConfigService {
  private configUrl = 'assets/routes-config.json';

  constructor(private http: HttpClient) {}

  getRouteConfig(): Observable<RouteConfig[]> {
    return this.http.get<RouteConfig[]>(this.configUrl).pipe(
      catchError(() => {
        console.error('Could not load route config from external JSON, using fallback data.');
        return of(MOCK_ROUTE_CONFIG);
      })
    );
  }
}
