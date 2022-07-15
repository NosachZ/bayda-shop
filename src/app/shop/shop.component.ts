import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, DoCheck {

  currentPage!: string|undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    //this.currentPage = window.location.href;
    //this.currentPage = this.route.url.pipe(map(segments => segments.join('')))
    // this.route.firstChild?.url.subscribe(url => {this.t = url.join('')})
    this.currentPage = this.route.firstChild?.snapshot.url.join('');
  }
}
