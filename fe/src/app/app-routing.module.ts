import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'doggystyle-usuario',
    loadChildren: () => import('./doggystyle-usuario/doggstyle-usuario.module').then(mod => mod.DoogystyleUsuarioModule),
  },
  {
    path: 'doggystyle-pantalla-inicial',
    loadChildren: () => import('./doggystyle-panatalla-inicial/doggystyle-pantalla-inicial.module').then(mod => mod.PantallInicialModule),
  }
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