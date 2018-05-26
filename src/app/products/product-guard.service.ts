import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('invalid Product Id');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
