import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent.ngOnInit();');
    }
}
