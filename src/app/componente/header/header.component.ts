import { Component, OnInit } from '@angular/core';
import { CargarJsService } from 'src/app/servicios/cargar-js.service';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public img_logo="assets/image/logo-blanco.webp";
  public img_destino="assets/image/ico-destino.webp";
  public img_ubicacion="assets/image/ico-location.webp";
  public img_campus="assets/image/ico-campus.webp";
  public img_lupa="assets/image/lupa.webp";
  public img_lupa_2="assets/image/lupa-2.webp";

  public img_apfacebook="assets/image/ap-facebook.webp";
  public img_apinstagram="assets/image/ap-instagram.webp";
  public img_apyoutube="assets/image/ap-youtube.webp";
  public img_aptwitter="assets/image/ap-twitter.webp";
  public img_aptiktok="assets/image/ap-tiktok.webp";
  constructor(
    private _CargarJsService:CargarJsService,
  ) { 
    // this._CargarJsService.Cargarjs(["buscador"]);
  }

  ngOnInit(): void {

/* codigo para el menu fixed */
    posicionarMenu();
 
    $(window).scroll(function() {    
        posicionarMenu();
    });
     
    function posicionarMenu() {
        var altura_del_header = $('.header').outerHeight(true);
        var altura_del_menu = $('.menu').outerHeight(true);
     
        if ($(window).scrollTop() >= altura_del_header){
            $('.menu').addClass('fixed');
            $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
            $( ".buscador" ).hide();
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
           
        } else {
            $('.menu').removeClass('fixed');
            $('.wrapper').css('margin-top', '0');
        }
    }
/* **************************************** */
    
    $( ".cross" ).hide();
    $( ".buscador" ).hide();
    $( ".hamburger" ).click(function() {
      $( ".buscador" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
      });
    });
    
    $( ".cross" ).click(function() {
      $( ".buscador" ).slideToggle( "slow", function() {
       $( ".cross" ).hide();
        $( ".hamburger" ).show();
      });
    });


  }

}
