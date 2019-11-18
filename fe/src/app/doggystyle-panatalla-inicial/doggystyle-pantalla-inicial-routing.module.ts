import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PerfilComponent } from './perfil/perfil.component';

const pantallaInicialRoutingModule: Routes = [
  {
    path: '',
    component: PantallaInicialComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'busqueda', component: BusquedaComponent },
          { path: 'perfil', component: PerfilComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pantallaInicialRoutingModule)
  ],
  exports: [
    RouterModule
  ]
})
export class PantallaInicialRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/