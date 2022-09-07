import { Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider/options';

@Component({
  selector: 'app-number-range-filter',
  templateUrl: './number-range-filter.component.html',
  styleUrls: ['./number-range-filter.component.scss']
})
export class NumberRangeFilterComponent implements OnInit {

  @Input() data: any;

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() { }

  ngOnInit(): void {
  }

}
