import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DoggstyleUsuarioComponent }    from './usuario/doogstyle-usuario.component';
import { IngresoComponent }  from './ingreso/ingreso.component';
import { RegistroComponent }    from './registro/registro.component';
import { RecuperarContraseñaComponent }    from './recuperar-contraseña/recuperar-contraseña.component';

import { DoogystyleUsuarioRoutingModule }       from './doggstyle-usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DoogystyleUsuarioRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DoggstyleUsuarioComponent,
    IngresoComponent,
    RegistroComponent,
    RecuperarContraseñaComponent
  ]
})
export class DoogystyleUsuarioModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/