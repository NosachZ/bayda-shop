import { Component, Input, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider/options';
import { AttrType } from 'src/app/_data-model/products';
import { FiltersHandlerService, NumberRangeFilterArg } from '../../filters-handler.service';


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

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {
    this.minValue = this.options.floor = this.data.values.item.minValue;
    this.maxValue = this.options.ceil = this.data.values.item.maxValue;
  }

  onChangeRange() {
    let data: NumberRangeFilterArg;
    if ((this.minValue === this.options.floor)&&(this.maxValue === this.options.ceil)) {
      data = {update: false, min: this.minValue, max: this.maxValue};
    } else {
      data = {update: true, min: this.minValue, max: this.maxValue};
    }
    this.filtersHandler.switchFilter(this.data.attr.name, AttrType.NumberRange, data);
  }

}