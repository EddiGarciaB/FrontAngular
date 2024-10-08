import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { RequestLogin, ResponseLogin } from '../../../features/login/interfaces/login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: RequestLogin): Observable<ResponseLogin>{
    return this.http.post( '/auth/login', payload).pipe(
      map(response => response as ResponseLogin)
    );
  }

  hasPermission(role: string): boolean{
    var roles = sessionStorage.getItem("RolesUser");
    if(roles){
        const found =  JSON.parse(roles.toString()).find((elem: string) => elem == role);
        return found?true:false;
    }
    return false;
  }

  hasAnyPermission(roles: string[]): boolean{
    for (let index = 0; index < roles.length; index++) {
        if(this.hasPermission(roles[index])){
            return true;
        }
    }
    return false;
  }

}
