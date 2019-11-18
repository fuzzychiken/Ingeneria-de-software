import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { DoogystyleUsuarioModule} from './doggystyle-usuario/doggstyle-usuario.module';

@NgModule({
  imports: [
    ButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    DoogystyleUsuarioModule,
    AppRoutingModule,
  ], 
  declarations: [
    AppComponent,
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/