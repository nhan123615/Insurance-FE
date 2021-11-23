import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot
} from '@angular/router';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../constants';


@Injectable({ providedIn: 'root' })
export class CustomerGuard implements CanActivate {
  constructor(private router: Router, private credentialService: CredentialService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const credential = JSON.parse(localStorage.getItem('credential'));
    if (credential) {
      const { roleName, status } = credential;
      if (status && roleName === APP_CONST.ROLE_CUSTOMER) {
        // logged in so return true
        return true;
      }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }
}
