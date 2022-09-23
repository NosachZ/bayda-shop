import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersHandlerService, StringFilterArg } from '../../filters-handler.service';
import { AttrType } from 'src/app/_data-model/products';


@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  @Input() data: any;

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange, id: StringFilterArg) {
    this.filtersHandler.switchFilter(this.data.attr.name, AttrType.String, id);
  }

}
