import { Component, OnInit } from '@angular/core';
import { CargarJsService } from 'src/app/servicios/cargar-js.service';

declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-calidadycrecimiento',
  templateUrl: './calidadycrecimiento.component.html',
  styleUrls: ['./calidadycrecimiento.component.css']
})
export class CalidadycrecimientoComponent implements OnInit {
  public pic1="assets/image/sistema-aseguramiento-calidad.webp";
  public pic2="assets/image/investigaciones.webp";
  public pic3="assets/image/relacionamiento-empresarial.webp";
  public pic4="assets/image/egresados.webp";
  public pic5="assets/image/rendicion-de-cuentas.webp";

  imagenesCalidad:Array<any> =[

    {imagen:this.pic1,titulo:'Sistema de Aseguramiento de la Calidad'},
    {imagen:this.pic2,titulo:'Investigaciones e Internacionalización'},
    {imagen:this.pic3,titulo:'Relacionamiento Empresarial'},
    {imagen:this.pic4,titulo:'Egresados'},
    {imagen:this.pic5,titulo:'Rendición de cuentas'}

  ]


  constructor(private _CargarJsService:CargarJsService) { 
    this._CargarJsService.Cargarjs(["slick.min"]);
    this._CargarJsService.Cargarjs(["calidad"]);

  }




  ngOnInit(): void {

     

    //   let items = document.querySelectorAll('#calidadslide .carousel-inner .carousel-items')
    //   items.forEach(async (el) => {
    //     const minPerSlide = 4
    //     let next = el.nextElementSibling
    //     for (var i=1; i<minPerSlide; i++) {
    //         if (!next) {
    //             // wrap carousel by using first child
    //           next = items[0]
    //         }
    //         let cloneChild = next.cloneNode(true)
    //         el.appendChild(cloneChild.childNodes[0])
    //         next = await next.nextElementSibling
    //     }
    // });





  }


}


