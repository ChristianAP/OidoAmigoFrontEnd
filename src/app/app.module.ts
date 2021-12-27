import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';

////////////// ANGULAR MATERIAL
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

import { TemplateComponentComponent } from './template-component/template-component.component';
import { LoginComponent } from './VistaComponent/login/login.component';
import { PruebaComponent } from './VistaComponent/prueba/prueba.component';
import { CargarScriptService } from './cargar-script.service';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { RegistroPsicologoComponent } from './VistaComponent/registro-psicologo/registro-psicologo.component';
import { ReportePsicologoComponent } from './VistaComponent/reporte-psicologo/reporte-psicologo.component';
import { SolicitudComponent } from './VistaComponent/solicitud/solicitud.component';
import { WelcomeComponent } from './VistaComponent/welcome/welcome.component';
import { PacienteComponent } from './VistaComponent/paciente/paciente.component';
import { PacienteLoginComponent } from './VistaComponent/paciente-login/paciente-login.component';
import { PacienteSesionesComponent } from './VistaComponent/paciente-sesiones/paciente-sesiones.component';
import { ValidarSesionesComponent } from './VistaComponent/validar-sesiones/validar-sesiones.component';
import { ActivatedComponent } from './VistaComponent/activated/activated.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponentComponent,
    LoginComponent,
    PruebaComponent,
    RegistroPsicologoComponent,
    ReportePsicologoComponent,
    SolicitudComponent,
    WelcomeComponent,
    PacienteComponent,
    PacienteLoginComponent,
    PacienteSesionesComponent,
    ValidarSesionesComponent,
    ActivatedComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService,
      multi: true
    },
    CargarScriptService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
