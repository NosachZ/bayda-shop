import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersHandlerService, SelectedFilters, StringFilterArg } from '../../filters-handler.service';
import { AttrType } from 'src/app/_data-model/products';


interface Values {
  item: {
    id: number,
    value: string,
    state?: boolean
  }
}

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  @Input() data: any;

  values: Values[] = [];

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange, id: StringFilterArg) {
    this.filtersHandler.switchFilter(this.data.attr.name, AttrType.String, id);
  }

  init(selectedFilters: SelectedFilters) {
    this.reset();

    let filterNames = new Set(Object.keys(selectedFilters));
    if (filterNames.has(this.data.attr.name)) {
      let selectedValues = selectedFilters[this.data.attr.name].values as Set<number>;
      for (let value of this.values) {
        if (selectedValues.has(value.item.id)) {
          value.item.state = true;
        }
      }
    }
  }

  reset() {
    this.values = this.data.values;

    for (let value of this.values) {
      value.item.state = false;
    }
  }

}
