import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersHandlerService } from '../../filters-handler.service';
import { AttrType } from 'src/app/_data-model/products';


@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {

  @Input() data: any;


  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange) {
    this.filtersHandler.switchFilter(this.data.attr.name, AttrType.Boolean, event.checked);   
  }
}
