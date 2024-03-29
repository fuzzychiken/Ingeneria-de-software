import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ElementRef, Renderer, NgZone } from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';

enum MenuOrientation {
  STATIC,
  OVERLAY,
  SLIM,
  HORIZONTAL
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/