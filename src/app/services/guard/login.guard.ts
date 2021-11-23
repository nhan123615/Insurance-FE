import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../constants';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private credentialService: CredentialService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const credential = JSON.parse(localStorage.getItem('credential'));
    if (credential) {
      const { roleName, status } = credential;
      if (status && roleName === APP_CONST.ROLE_CUSTOMER) {
        this.router.navigate(['customer'])
      }
      if (status && roleName === APP_CONST.ROLE_AGENT) {
        this.router.navigate(['admin'])
      }
      return false;
    }

    return true;
  }

  // canbn(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   const credential = JSON.parse(localStorage.getItem('credential'));
  //   if (credential) {
  //     const { roleName, status } = credential;
  //     if (status && roleName === APP_CONST.ROLE_CUSTOMER) {
  //       this.router.navigate(['customer'])

  //     } else if (status && roleName === APP_CONST.ROLE_AGENT) {

  //       this.router.navigate(['admin'])
  //     }
  //     return false;
  //   }

  //   this.router.navigate(['login']);
  //   return true;

  // }


}
