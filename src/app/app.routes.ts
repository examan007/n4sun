import { Routes } from '@angular/router';

import { AboutComponent, ContactComponent, HomeComponent, ListComponent } from './components';

export var states = [
  { name: 'about', url: '/about', component: AboutComponent },
  { name: 'home', url: '/home', component: HomeComponent },
  { name: 'contact', url: '/contact', component: ContactComponent },
  { name: 'list', url: '/home/list', component: ListComponent }
];
