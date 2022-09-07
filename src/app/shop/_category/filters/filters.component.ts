import { Component, Type, Input, OnInit, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { FilterDirective } from '../../filter.directive';
import { AttributeData } from '../category-data';
import { BooleanFilterComponent } from '../filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from '../filters-templates/number-filter/number-filter.component';
import { NumberRangeFilterComponent } from '../filters-templates/number-range-filter/number-range-filter.component';
import { StringFilterComponent } from '../filters-templates/string-filter/string-filter.component';



type FilterTypes = BooleanFilterComponent | NumberFilterComponent | NumberRangeFilterComponent | StringFilterComponent;

class Filter {
  constructor (public component: Type<FilterTypes>, public data: any) {}
}



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, AfterViewInit {
  @Input() attributeArrayComplex: Observable<AttributeData[]> = EMPTY;
  
  // @ViewChild(FilterDirective, {static: true}) filterHost!: FilterDirective;
  @ViewChildren('dynamic', {read: ViewContainerRef}) dynamic!: QueryList<ViewContainerRef>;

  filtersArray: Filter[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.attributeArrayComplex
      .subscribe(array => {
        this.makeFiltersArray(array);
      });
  }

  ngAfterViewInit(): void {
    this.dynamic.changes.subscribe(() => {
      this.dynamic.forEach((vcr: ViewContainerRef, i: number) => {
        vcr.clear();
        let componentRef = vcr.createComponent(this.filtersArray[i].component);
        componentRef.instance.data = this.filtersArray[i].data;
      });
      this.changeDetector.detectChanges();
      }
    );
  }

  makeFiltersArray(array: AttributeData[]) {
    this.filtersArray.length = 0;
    let availability = new Filter(
      BooleanFilterComponent, 
      {
        attr: {
          name: "nalichie",
          title: "Наличие",
          type: "boolean",
          description: "В наличии"
          }
      }
    );
    this.filtersArray.push(availability);

    let price = new Filter(
      NumberRangeFilterComponent, 
      {
        attr: {
          name: "price",
          title: "Цена",
          type: "number-range",
        },
        value: {
          minValue: 0, 
          maxValue: 20000
        }
      
    });
    this.filtersArray.push(price);

    for (let item of array) {
      let filter: Filter;
      switch (item.attr.type) {
        case "boolean": filter = new Filter(BooleanFilterComponent, item); break;
        case "number": filter = new Filter(NumberFilterComponent, item); break;
        case "number-range": filter = new Filter(NumberFilterComponent, item); break;
        case "string": filter = new Filter(StringFilterComponent, item); break;
      }
      this.filtersArray.push(filter);
    }
  }
  
}
