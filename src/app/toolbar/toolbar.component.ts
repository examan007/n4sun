import { Component, NgZone, OnInit } from '@angular/core';
import * as UIRouterModule from 'assets/UIRouter.js';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.pug',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  UIRouter = UIRouterModule.getUIRouter();
  objects = [];
  results = [];
  constructor() { }
  ngOnInit() {
    console.log('toolbar');
    UIRouterModule.initUIRouter(this);
    this.UIRouter.update();
  }
  updateObjects () {
      console.log('In Angular is ' + NgZone.isInAngularZone());
      this.objects = [...UIRouterModule.getObjects()];
      this.results = [...UIRouterModule.getResults()];
  }
}
