import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AttributeData, BooleanAttributeData } from '../../category-data';
import { FiltersHandlerService } from '../../filters-handler.service';


@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {

  @Input() data: any;

  name: string = "";

  // obj: any = {};

  constructor(private filtersHandler: FiltersHandlerService) { }

  ngOnInit(): void {
    this.name = this.data.attr.name;
  }

  onChange(event: MatCheckboxChange, ) {
    let str = "string";
    // this.obj[str] = "test string";

    let filterItem = event.source.name + " = 1";
    // alert(this.obj.string + "filterItem is: " + filterItem);
  }
}
