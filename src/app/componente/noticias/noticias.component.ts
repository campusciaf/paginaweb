import { Component, OnInit } from '@angular/core';
import { CargarJsService } from 'src/app/servicios/cargar-js.service';
import { ConectarApiServiceService } from 'src/app/servicios/conectar-api.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  
  public next="assets/image/btn-next.webp";
  public calendario="assets/image/calendario-regular.webp";
  public vistas="assets/image/vistas.webp";

  listarNoticias:any;

  // imagenesNoticias:Array<any> =[

  //   {imagen:'assets/image/banner-movil-1.webp',titulo:'Sistema de Aseguramiento de la Calidad'},
  //   {imagen:'assets/image/banner-movil-2.webp',titulo:'Investigaciones e Internacionalización'},
  //   {imagen:'assets/image/banner-movil-3.webp',titulo:'Relacionamiento Empresarial'},
  //   {imagen:'assets/image/banner-movil-4.webp',titulo:'Egresados'},
  //   {imagen:'assets/image/banner-movil-5.webp',titulo:'Rendición de cuentas'}

  // ]
  constructor( 
    private _CargarJsService:CargarJsService,
    private conectarApiService:ConectarApiServiceService,
    ) {

    this._CargarJsService.Cargarjs(["noticias"]);
   }

  ngOnInit(): void {

    this.conectarApiService.obtenerNoticias().subscribe(respuesta=>{
      this.listarNoticias=respuesta
    });

  }

}
