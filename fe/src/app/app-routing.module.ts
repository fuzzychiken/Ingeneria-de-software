import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'doggystyle-usuario',
    loadChildren: "./doggystyle-usuario/doggstyle-usuario.module"
  },
  {
    path: 'doggystyle-pantalla-inicial',
    loadChildren:'./doggystyle-panatalla-inicial/doggystyle-pantalla-inicial.module'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
      
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/