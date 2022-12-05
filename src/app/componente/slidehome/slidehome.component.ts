import { Component, OnInit } from '@angular/core';
import { CargarJsService } from 'src/app/servicios/cargar-js.service';
import { ConectarApiServiceService } from 'src/app/servicios/conectar-api.service';

// declare var jQuery:any;
// declare var $:any;
@Component({
  selector: 'app-slidehome',
  templateUrl: './slidehome.component.html',
  styleUrls: ['./slidehome.component.css']
})
export class SlidehomeComponent implements OnInit {
  listarSlider:any;

  contador = {
    numero:[0,1,2,3,4,5,6,7,8,9,10],
  }
  constructor(
    private conectarApiService:ConectarApiServiceService,
    private _CargarJsService:CargarJsService,
  ) { 

    // this._CargarJsService.Cargarjs(["slide"]);
   
    
  }

  ngOnInit(): void {


    this.conectarApiService.obtenerSlide().subscribe(respuesta=>{
      this.listarSlider=respuesta
    });
  

  }
  

}
