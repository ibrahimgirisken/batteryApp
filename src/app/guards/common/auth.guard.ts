import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private jwtHelperService: JwtHelperService,private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token: string = localStorage.getItem('accessToken');
    // const decodeToken= this.jwtHelperService.decodeToken(token);
    // const expirationDate:Date=this.jwtHelperService.getTokenExpirationDate(token);
    let expired: boolean;
    try {
      expired = this.jwtHelperService.isTokenExpired(token);
    } catch (error) {
      expired = true;
    }
    if(!token || expired)
    {
      this.router.navigate(["login"],{queryParams:{returnUrl:state.url}});
    }
     return true;
  }
}
