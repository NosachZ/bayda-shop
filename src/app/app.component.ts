import { Component, OnInit } from '@angular/core';
import { LocaleService } from './services/locale.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lang: string = "";
  constructor (
    private locale: LocaleService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    
  }

  ngOnInit () {
    // this.lang = this.locale.getLanguage();
    
    // this.router.navigate(["", this.lang]);
  }
}
