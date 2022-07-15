import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  test!: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const t = this.route.url.subscribe(url => {
    //      this.test = url.join('');
    //    })
    // console.log('-----------');
    
    // console.log(this.test);

  }

}
