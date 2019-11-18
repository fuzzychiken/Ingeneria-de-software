import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoggstyleUsuarioComponent }           from './usuario/doogstyle-usuario.component';
import { IngresoComponent }  from './ingreso/ingreso.component';
import { RegistroComponent }    from './registro/registro.component';
import { RecuperarContraseñaComponent }    from './recuperar-contraseña/recuperar-contraseña.component';

const doogystyleUsuarioRoutes: Routes = [
  {
    path: '',
    component: DoggstyleUsuarioComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: IngresoComponent },
          { path: './registro', component: RegistroComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(doogystyleUsuarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DoogystyleUsuarioRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/