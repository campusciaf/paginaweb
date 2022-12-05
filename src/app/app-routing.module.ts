import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { PageNotFoundComponent } from './componente/page-not-found/page-not-found.component';
import { IngSoftwareComponent } from './componente/ing-software/ing-software.component';
import { AdministracionComponent } from './componente/administracion/administracion.component';
import { ContaduriaComponent } from './componente/contaduria/contaduria.component';
import { ContinuadaComponent } from './componente/continuada/continuada.component';
import { BienestarComponent } from './componente/bienestar/bienestar.component';
import { SstComponent } from './componente/sst/sst.component';
import { IndustrialComponent } from './componente/industrial/industrial.component';

const routes: Routes = [

  {path: '', redirectTo:'inicio' , pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'software', component:IngSoftwareComponent},
  {path: 'software', component:IngSoftwareComponent},
  {path: 'administracion', component:AdministracionComponent},
  {path: 'contaduria', component:ContaduriaComponent},
  {path: 'continuada', component:ContinuadaComponent},
  {path: 'bienestar', component:BienestarComponent},
  {path: 'sst', component:SstComponent},
  {path: 'industrial', component:IndustrialComponent},
  {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
