import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ConectarApiServiceService {
// produccion//
API: string='https://ciaf.edu.co/api_rest';


//local//
// API: string='http://localhost/web-angular/api_rest';
autorizacion = 'KFTDQFYvqbPLXkHTuXQJR4Qy3vUryK';


  constructor(private clienteHttp:HttpClient) { }

  obtenerNoticias(){

    const headers = new HttpHeaders({'Autorizacion': this.autorizacion});
    return this.clienteHttp.get(this.API+ '/noticias.php',{headers});

  }

  obtenerSlide(): Observable<any>{

    const headers = new HttpHeaders({'Autorizacion': this.autorizacion});
    return this.clienteHttp.get(this.API+ '/slide.php',{headers});

  }

  
}
