import { Component, Input, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider/options';
import { AttrType } from 'src/app/_data-model/products';
import { FiltersHandlerService, NumberRangeFilterArg, SelectedFilters } from '../../filters-handler.service';

interface State {
  minValue: number,
  maxValue: number,
}

@Component({
  selector: 'app-number-range-filter',
  templateUrl: './number-range-filter.component.html',
  styleUrls: ['./number-range-filter.component.scss']
})
export class NumberRangeFilterComponent implements OnInit {

  @Input() data: any;

  state: State = {
    minValue: 0,
    maxValue: 0,
  }
  options: Options = {
    floor: 0,
    ceil: 0,
    noSwitching: true,
    minRange: 0,
  };

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChangeRange() {
    let data: NumberRangeFilterArg;
    if ((this.state.minValue === this.options.floor)&&(this.state.maxValue === this.options.ceil)) {
      data = {update: false, min: this.state.minValue, max: this.state.maxValue};
    } else {
      data = {update: true, min: this.state.minValue, max: this.state.maxValue};
    }
    this.filtersHandler.switchFilter(this.data.attr.name, AttrType.NumberRange, data);    
  }

  init(selectedFilters: SelectedFilters) {
    this.reset();
    let filterNames = new Set(Object.keys(selectedFilters));
    if (filterNames.has(this.data.attr.name)) {
      this.state = selectedFilters[this.data.attr.name].values as State;
    }
  }

  reset() {
    this.options.floor = this.data.values.item.minValue ?? 0;
    this.options.ceil = this.data.values.item.maxValue ?? 100;
    this.state.minValue = this.options.floor ?? 0;
    this.state.maxValue = this.options.ceil ?? 100;
  }

}
