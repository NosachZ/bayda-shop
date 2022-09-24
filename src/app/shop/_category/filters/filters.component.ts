import { Component, Input, OnInit, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, EMPTY, Subject, takeUntil } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue, AttrType } from 'src/app/_data-model/products';
import { FilterDirective } from '../../filter.directive';
import { AttributeData } from '../category-data';
import { Filter, FiltersHandlerService } from '../filters-handler.service';
import { BooleanFilterComponent } from '../filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from '../filters-templates/number-filter/number-filter.component';
import { NumberRangeFilterComponent } from '../filters-templates/number-range-filter/number-range-filter.component';
import { StringFilterComponent } from '../filters-templates/string-filter/string-filter.component';




@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() attributeArrayComplex: Observable<AttributeData[]> = EMPTY;
  
  // @ViewChild(FilterDirective, {static: true}) filterHost!: FilterDirective;
  @ViewChildren('dynamic', {read: ViewContainerRef}) dynamic!: QueryList<ViewContainerRef>;

  filtersArray: Filter[] = [];
  
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private changeDetector: ChangeDetectorRef,
    private filtersHandler: FiltersHandlerService,
    private router: Router,
    private route: ActivatedRoute,
 ) { }

  ngOnInit(): void {
    this.attributeArrayComplex
      .pipe(takeUntil(this.destroy$))
      .subscribe(array => {
        console.log("init");
        this.filtersArray = this.filtersHandler.makeFiltersArray(array, this.route.snapshot.queryParamMap);          
        // this.filtersHandler.makeSelectedFiltersFromQueryParams(this.route.snapshot.queryParams, this.filtersArray);
      });

    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log("init filters");
          console.log(this.filtersArray);
          console.log(this.filtersHandler.selectedFilters);
          
          
          // this.filtersHandler.initFiltersFromQueryParams(this.route.snapshot.queryParams, this.filtersArray);

        }
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

  // private makeFiltersArray(array: AttributeData[]) {
  //   this.filtersArray.length = 0;
  //   let availability = new Filter(
  //     BooleanFilterComponent, 
  //     {
  //       attr: {
  //         name: "nalichie",
  //         title: "Наличие",
  //         type: "boolean",
  //         // type: AttrType.Boolean,
  //         description: "В наличии"
  //         },
  //       valies: {
  //         id: null,
  //         value: false
  //       }
  //     }
  //   );
  //   this.filtersArray.push(availability);

  //   let price = new Filter(
  //     NumberRangeFilterComponent, 
  //     {
  //       attr: {
  //         name: "price",
  //         title: "Цена",
  //         type: "number-range",
  //         // type: AttrType.NumberRange,
  //       },
  //       values: {
  //         minValue: 0, 
  //         maxValue: 20000
  //       }
      
  //   });
  //   this.filtersArray.push(price);

  //   for (let item of array) {
  //     let filter: Filter;
  //     switch (item.attr.type) {
  //       case "boolean": filter = new Filter(BooleanFilterComponent, item); break;
  //       case "number": filter = new Filter(NumberFilterComponent, item); break;
  //       case "number-range": filter = new Filter(NumberFilterComponent, item); break;
  //       case "string": filter = new Filter(StringFilterComponent, item); break;
  //       // case AttrType.Boolean: filter = new Filter(BooleanFilterComponent, item); break;
  //       // case AttrType.Number: filter = new Filter(NumberFilterComponent, item); break;
  //       // case AttrType.NumberRange: filter = new Filter(NumberRangeFilterComponent, item); break;
  //       // case AttrType.String: filter = new Filter(StringFilterComponent, item); break;
  //     }
  //     this.filtersArray.push(filter);
  //   }
  // }
  
  applyFilters() {
    // this.router.navigate(
    //   [], 
    //   {
    //     relativeTo: this.activatedRoute,
    //     queryParams: this.FiltersHandler.makeQueryParams(), 
    //     // queryParamsHandling: 'merge', // remove to replace all query params by provided
    //   });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
