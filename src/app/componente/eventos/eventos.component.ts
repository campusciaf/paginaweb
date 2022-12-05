import { Component, OnInit } from '@angular/core';
import { CargarJsService } from 'src/app/servicios/cargar-js.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  public next="assets/image/btn-next-2.webp";

  eventosCalendario:Array<any> =[

    {evento:'Semana original',dia:'27',mes:'OCT',hora:'1:15'},
    {evento:'Semana original',dia:'28',mes:'OCT',hora:'2:30'},
    {evento:'Semana original',dia:'29',mes:'OCT',hora:'11:00'},
    {evento:'Semana original',dia:'30',mes:'OCT',hora:'04:00'},
    {evento:'Semana original',dia:'31',mes:'OCT',hora:'12:00'},


  ]


  constructor(private _CargarJsService:CargarJsService) { 
    this._CargarJsService.Cargarjs(["eventos-plugins"]);
    this._CargarJsService.Cargarjs(["eventos"]);
    this._CargarJsService.Cargarjs(["eventos-sly.min"]);
  }

  ngOnInit(): void {
  }

}
