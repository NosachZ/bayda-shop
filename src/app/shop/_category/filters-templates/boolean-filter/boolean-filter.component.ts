import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersHandlerService, SelectedFilters } from '../../category-handler.service';
import { AttrType } from 'src/app/_data-model/products';
import { AttributeData } from 'src/app/shop/shop-interfaces';


@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {

  @Input() data!: AttributeData;

  state: boolean = false;


  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange) {
    this.filtersHandler.switchFilter(this.data.attribute.name, AttrType.BOOLEAN, event.checked);
  }

  init(selectedFilters: SelectedFilters) {
    this.reset();

    let filterNames = new Set(Object.keys(selectedFilters));    
    if (filterNames.has(this.data.attribute.name)) {      
      this.state = true;
    }
  }

  reset() {
    this.state = false;    
  }
}
