import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  name: string = "";

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.name = this.data.attr.name;
  }

  onChange(event: MatCheckboxChange, ) {
    let str = "string";

    let filterItem = event.source.name + " = 1";
  }

}
