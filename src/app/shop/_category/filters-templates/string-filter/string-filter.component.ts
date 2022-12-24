import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersHandlerService, SelectedFilters, StringFilterArg } from '../../category-handler.service';
import { AttrType } from 'src/app/_data-model/products';
import { AttributeData, AttributeValueType } from 'src/app/shop/shop-interfaces';


interface Values {
  value: AttributeValueType
  state?: boolean
}

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  @Input() data!: AttributeData;

  values: Values[] = [];

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange, id: StringFilterArg) {
    this.filtersHandler.switchFilter(this.data.attribute.name, AttrType.STRING, id);
  }

  init(selectedFilters: SelectedFilters) {
    this.reset();

    let filterNames = new Set(Object.keys(selectedFilters));
    if (filterNames.has(this.data.attribute.name)) {
      let selectedValues = selectedFilters[this.data.attribute.name].values as Set<number>;
      for (let item of this.values) {
        if (selectedValues.has(item.value.id)) {
          item.state = true;
        }
      }
    }
  }

  reset() {
    this.values.length = 0;
    for (let item of this.data.values) {
      this.values.push({value: item, state: false})
    }
  }

}
