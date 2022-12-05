import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.css']
})
export class AliadosComponent implements OnInit {

  

  aliados:Array<any> =[

    {titulo:'uno', imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'},
    {titulo:'dos',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'},
    {titulo:'tres',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png'},
    {titulo:'cuatro',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png'},
    {titulo:'cinco',imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png'}

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
