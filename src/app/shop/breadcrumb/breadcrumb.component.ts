import { Component, Input, OnInit } from '@angular/core';
import { CategoryType } from '../shop-interfaces';
import { FiltersHandlerService } from '../_category/category-handler.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() categoryChain: CategoryType[] = []; 
  @Input() handler: Function | null = null;

  
  constructor(
    public filtersHandler: FiltersHandlerService
    ) { }

  ngOnInit(): void {
  }

  lastItemHandler() {
    if (this.handler) {      
      this.handler();
    }
  }

}
