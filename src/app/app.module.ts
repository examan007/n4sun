import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { states } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UIRouterModule } from "@uirouter/angular";
import { HomeComponent } from './components';
import { AboutComponent } from './components';
import { ContactComponent } from './components';
import { ListComponent } from './components';
@NgModule({
  declarations: [
    ListComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UIRouterModule.forRoot({ states: states, useHash: true })
  ],
  providers: [/*GithubService*/],
  bootstrap: [AppComponent]
})
export class AppModule {}
