import { Component, NgZone, OnInit } from '@angular/core';
import 'zone.js/dist/zone';
import { ToolbarComponent } from './toolbar/toolbar.component';
import * as ContactObj from 'assets/contacts.js';
declare var System: any;
declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'N4Contact';
    Manager = require('./common/contactmanager.js').getManager();
    Contacts = ContactObj.getContacts();1
    contactname = ContactObj.value;
    objects = [...ContactObj.getObjects()];
    template = ContactObj.getTemplate();
    results = [];
    objclass = 'text-muted';
    updateObjects () {
        console.log('In Angular is ' + NgZone.isInAngularZone());
        this.objects = [...ContactObj.getObjects()];
        this.results = [...ContactObj.getResults()];
    }
    readSingleFile(obj, tag) {
        ContactObj.readSingleFile(obj, tag);
    }
    ngOnInit() {
        console.log('AppComponent.ngOnInit();');
        ContactObj.initContacts(this);
    }
    getManager() {
        return (this.Manager):
    }
}
