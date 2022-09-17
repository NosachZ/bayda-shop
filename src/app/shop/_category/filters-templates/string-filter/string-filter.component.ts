import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersHandlerService } from '../../filters-handler.service';
import { AttrType } from 'src/app/_data-model/products';


@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  name: string = "";

  @Input() data: any;

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {
    this.name = this.data.attr.name;
  }

  onChange(event: MatCheckboxChange, id: number) {
    this.filtersHandler.switchFilter(this.data.attr.name, AttrType.String, id);
  }

}
