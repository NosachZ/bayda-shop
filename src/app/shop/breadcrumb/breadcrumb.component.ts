import { Component, Input, OnInit } from '@angular/core';
import { CategoryChain, ModelData } from '../_category/category-data';
import { FiltersHandlerService } from '../_category/filters-handler.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() categoryChain: CategoryChain = []; 
  @Input() handler: Function | null = null;

  
  constructor(    public filtersHandler: FiltersHandlerService
    ) { }

  ngOnInit(): void {
  }

  lastItemHandler() {
    if (this.handler) {
      console.log("handler");
      
      this.handler();

      // this.handler.call(this.context);
    }
  }

}
