import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateAsync(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {

    const isAuthenticated = this.authService.isLoggedIn();

    if (isAuthenticated) {
      return of(true);  
    } else {
      return of(this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } }));  // Redirect to login
    }
  }
}
