import { Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider/options';
import { AttrType } from 'src/app/_data-model/products';
import { FiltersHandlerService, NumberRangeFilterArg, SelectedFilters } from '../../category-handler.service';
import { AttributeData, FilterRange } from 'src/app/shop/shop-interfaces';

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

  @Input() data!: AttributeData;

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

  valuesArray: number[] = [];
  filterRange: FilterRange = {} as FilterRange;

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChangeRange() {
    let data: NumberRangeFilterArg;
    if ((this.state.minValue === this.options.floor)&&(this.state.maxValue === this.options.ceil)) {
      data = {update: false, min: this.state.minValue, max: this.state.maxValue};
    } else {
      data = {update: true, min: this.state.minValue, max: this.state.maxValue};
    }
    this.filtersHandler.switchFilter(this.data.attribute.name, AttrType.NUMBER_RANGE, data);    
  }

  init(selectedFilters: SelectedFilters) {
    this.valuesArray.length = 0;

    for (let item of this.data.values) {
      if (item.numberValue) {
        this.valuesArray.push(item.numberValue);
      }
    }
    this.valuesArray.sort((a, b) => a - b);

    this.reset();
    
    let filterNames = new Set(Object.keys(selectedFilters));
    if (filterNames.has(this.data.attribute.name)) {
      this.state = selectedFilters[this.data.attribute.name].values as State;
    }
  }

  reset() {
    this.options.floor = this.valuesArray[0] ?? 0;
    this.options.ceil = this.valuesArray[this.valuesArray.length - 1] ?? 100;
    this.state.minValue = this.options.floor;
    this.state.maxValue = this.options.ceil;
  }

}
