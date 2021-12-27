import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/cargar-script.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptService) {  _CargaScripts.Carga(["template"]);}

  ngOnInit(): void {
  }

}
