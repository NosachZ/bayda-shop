import { Component, OnInit, Input } from '@angular/core';
import { SelectedFilters } from '../../filters-handler.service';

@Component({
  selector: 'app-number-filter',
  templateUrl: './number-filter.component.html',
  styleUrls: ['./number-filter.component.scss']
})
export class NumberFilterComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  init(selectedFilters: SelectedFilters) {
    this.reset();
    console.error("number filter init not implemented");
  }

  reset() {
    console.error("number filter reset not implemented");
  }

}
