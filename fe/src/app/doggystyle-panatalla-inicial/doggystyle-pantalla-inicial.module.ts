import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PantallaInicialRoutingModule }       from './doggystyle-pantalla-inicial-routing.module';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  imports: [
    CommonModule,
    PantallaInicialRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PantallaInicialComponent,
    PerfilComponent,
    BusquedaComponent,

  ]
})
export class PantallInicialModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/