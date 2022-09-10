import { Component, Input, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider/options';

@Component({
  selector: 'app-number-range-filter',
  templateUrl: './number-range-filter.component.html',
  styleUrls: ['./number-range-filter.component.scss']
})
export class NumberRangeFilterComponent implements OnInit {

  @Input() data: any;

  minValue: number = 0;
  maxValue: number = 0;
  options: Options = {
    floor: 0,
    ceil: 0,
    noSwitching: true,
    minRange: 1,
  };

  constructor() { }

  ngOnInit(): void {
    this.minValue = this.options.floor = this.data.values.minValue;
    this.maxValue = this.options.ceil = this.data.values.maxValue;
  }

}
