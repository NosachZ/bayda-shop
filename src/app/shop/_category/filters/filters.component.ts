import { Component, Input, OnInit, ViewChildren, ComponentRef, ViewContainerRef, QueryList, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, EMPTY, Subject, takeUntil, switchMap } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue, AttrType } from 'src/app/_data-model/products';
import { FilterDirective } from '../../filter.directive';
import { AttributeData } from '../category-data';
import { Filter, FiltersHandlerService, FilterTypes } from '../filters-handler.service';
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
  
  private destroy$: Subject<boolean> = new Subject<boolean>();

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
        this.filtersArray = this.filtersHandler.makeFiltersArray(array);
        /* console.log(`-----attributeArrayComplex changed.
Filters:`);
        console.log(`1. make Filters[]
        2. make 'SelectedFilters' from queryParams-----
        3. init Filters[] from selectedFilters---------
        4. send request to backend with current queryParams`);   */        
      });
  }

  ngAfterViewInit(): void {
    this.dynamic.changes
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.filtersHandler.initFilterComponents(this.dynamic);
      this.filtersHandler.initFiltersfromQueryParams();
      
      this.changeDetector.detectChanges();
      }
    );
    this.filtersHandler.dynamic = this.dynamic;
    this.filtersHandler.dynamic.changes.subscribe(()=>console.log('+++'))
  }

  

  onClick() {

    // (this.filtersHandler.filterComponentRefArray[1].instance as NumberRangeFilterComponent).minValue = 0;
    // (this.filtersHandler.filterComponentRefArray[1].instance).onReset();
    // (this.filtersHandler.filterComponentRefArray[0].instance as NumberFilterComponent).onReset();
    // (this.filtersHandler.filterComponentRefArray[0].instance as BooleanFilterComponent).state = false;
    

    /* this.dynamic.forEach((vcr: ViewContainerRef, i: number) => {
      vcr.clear();
      let componentRef = vcr.createComponent(this.filtersArray[i].component);
      componentRef.instance.data = this.filtersArray[i].data;
    });
    this.changeDetector.detectChanges(); */
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
