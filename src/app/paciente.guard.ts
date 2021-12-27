import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthPacienteService } from './Service/auth-paciente.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteGuard implements CanActivate {

constructor(private authService: AuthPacienteService, private router: Router){
}

  canActivate(): boolean {
    if (this.authService.loggedIn()){
      return true;
    }

    this.router.navigate(['/PLogin']);
    return false;
  }
  
}
