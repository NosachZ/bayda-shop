import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocaleService } from '../services/locale.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, DoCheck {

  // currentPage!: string|undefined;
  language!: string;

  constructor(
    private route: ActivatedRoute,
    private lang: LocaleService
  ) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.language = this.lang.getLanguage();
    // this.currentPage = this.route.firstChild?.snapshot.url.join('');
  }
}
