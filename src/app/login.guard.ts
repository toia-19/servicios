import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private login:LoginService, private router:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // return this.login.login() // devuelve una respuesta booleana
    if(this.login.login()){
      return true;
    }else{
      alert("Usted no tiene permiso de acceder a esta ruta.");
      this.router.navigateByUrl("/");
      return false;
    }
  } 
}