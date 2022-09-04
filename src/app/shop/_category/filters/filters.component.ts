import { Component, Type, Input, OnInit, ViewChild, ViewChildren, ViewContainerRef, QueryList, ComponentRef, AfterViewInit, AfterContentInit, AfterViewChecked, DoCheck, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { FilterDirective } from '../../filter.directive';
import { BooleanFilterComponent } from '../filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from '../filters-templates/number-filter/number-filter.component';
import { StringFilterComponent } from '../filters-templates/string-filter/string-filter.component';





type FilterTypes = BooleanFilterComponent | NumberFilterComponent | StringFilterComponent;

class Filter {
  constructor (public component: Type<FilterTypes>, public data: any) {}
}

export interface FilterComponent {
  data: any;
}

//temporary interface
export interface attributeArray_tmp {
  attr: Attribute,
  values: Pick<AttributeValue, 'id' | 'value'>[]
}

 export interface AttributeArray {
  attr: Omit<Attribute, 'categories'>,
  values: Pick<AttributeValue, 'id' | 'value'>[]
}





@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, AfterViewInit {
  @Input() attributeArrayComplex: Observable<AttributeArray[]> = EMPTY;
  
  // @ViewChild(FilterDirective, {static: true}) filterHost!: FilterDirective;

  @ViewChildren('dynamic', {read: ViewContainerRef}) dynamic!: QueryList<ViewContainerRef>;

  filtersArray: Filter[] = [];

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.attributeArrayComplex
      .subscribe(array => {
        this.makeFiltersArray(array);
        // console.log (this.filtersArray);
      });
  }

  ngAfterViewInit(): void {
    this.dynamic.changes.subscribe(() => {
      this.dynamic.map((vcr: ViewContainerRef, i: number) => {
        vcr.clear();
        let componentRef = vcr.createComponent(this.filtersArray[i].component);
        componentRef.instance.data = this.filtersArray[i].data;
      });
      this.cd.detectChanges();
      }
    );
  }

  makeFiltersArray(array: AttributeArray[]) {
    this.filtersArray.length = 0;
    let availability = new Filter(
      BooleanFilterComponent, 
      {
        name: "nalichie",
        title: "Наличие",
        type: "boolean",
        description: "В наличии"
      }
    );
    this.filtersArray.push(availability);

    let price = new Filter(NumberFilterComponent, {
      minPrice: 0, 
      maxPrice: 20000
    });
    this.filtersArray.push(price);

    for (let item of array) {
      let filter: Filter;
      switch (item.attr.type) {
        case "boolean": filter = new Filter(BooleanFilterComponent, item); break;
        case "number": filter = new Filter(NumberFilterComponent, item); break;
        case "string": filter = new Filter(StringFilterComponent, item); break;
      }
      this.filtersArray.push(filter);
    }
  }
  
}
