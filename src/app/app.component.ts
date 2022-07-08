import { Component, OnInit } from '@angular/core';
import { LocaleService } from './locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bayda-shop';

  constructor (private locale: LocaleService) { 
    
  }

  ngOnInit () {
    this.locale.getLanguage();
  }
}
