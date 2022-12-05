import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { SlidehomeComponent } from './componente/slidehome/slidehome.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CalidadycrecimientoComponent } from './componente/calidadycrecimiento/calidadycrecimiento.component';
import { NoticiasComponent } from './componente/noticias/noticias.component';
import { EventosComponent } from './componente/eventos/eventos.component';
import { AliadosComponent } from './componente/aliados/aliados.component';
import { IngSoftwareComponent } from './componente/ing-software/ing-software.component';
import { AdministracionComponent } from './componente/administracion/administracion.component';
import { ContaduriaComponent } from './componente/contaduria/contaduria.component';
import { ContinuadaComponent } from './componente/continuada/continuada.component';
import { BienestarComponent } from './componente/bienestar/bienestar.component';
import { SstComponent } from './componente/sst/sst.component';
import { IndustrialComponent } from './componente/industrial/industrial.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidehomeComponent,
    InicioComponent,
    CalidadycrecimientoComponent,
    NoticiasComponent,
    EventosComponent,
    AliadosComponent,
    IngSoftwareComponent,
    AdministracionComponent,
    ContaduriaComponent,
    ContinuadaComponent,
    BienestarComponent,
    SstComponent,
    IndustrialComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
