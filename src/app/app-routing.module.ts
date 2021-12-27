import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PacienteGuard } from './paciente.guard';

import { TemplateComponentComponent } from './template-component/template-component.component';
import { LoginComponent } from './VistaComponent/login/login.component';
import { PruebaComponent } from './VistaComponent/prueba/prueba.component';
import { RegistroPsicologoComponent } from './VistaComponent/registro-psicologo/registro-psicologo.component';
import { ReportePsicologoComponent } from './VistaComponent/reporte-psicologo/reporte-psicologo.component';
import { SolicitudComponent } from './VistaComponent/solicitud/solicitud.component';
import { WelcomeComponent } from './VistaComponent/welcome/welcome.component';
import { PacienteComponent } from './VistaComponent/paciente/paciente.component';
import { PacienteLoginComponent } from './VistaComponent/paciente-login/paciente-login.component';
import { PacienteSesionesComponent } from './VistaComponent/paciente-sesiones/paciente-sesiones.component';
import { ValidarSesionesComponent } from './VistaComponent/validar-sesiones/validar-sesiones.component';
import { ActivatedComponent } from './VistaComponent/activated/activated.component';


const Home: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'template', component:   TemplateComponentComponent, canActivate: [AuthGuard]},
  {path: 'prueba', component: PruebaComponent },
  {path: 'register', component: RegistroPsicologoComponent },
  {path: 'report_psico', component: ReportePsicologoComponent },
  {path: 'validar', component: ValidarSesionesComponent },
  {path: 'activated', component: ActivatedComponent },
  {path: 'paciente', component: PacienteComponent }
];

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent },
  {path: 'template', component:   TemplateComponentComponent, canActivate: [AuthGuard], children: Home},
  {path: 'PLogin', component: PacienteLoginComponent },
  {path: 'PSesiones', component: PacienteSesionesComponent, canActivate: [PacienteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent, 
  PruebaComponent,
  TemplateComponentComponent
];
