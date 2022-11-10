import { Component, Input, OnInit, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, EMPTY, Subject, takeUntil } from 'rxjs';
import { FilterDirective } from '../../filter.directive';
import { FiltersHandlerService } from '../filters-handler.service';




@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, AfterViewInit, OnDestroy {
  // @Input() attributeArrayComplex: Observable<AttributeData[]> = EMPTY;
  // @Input() attributeArrayComplex: AttributeData[] = [];

  
  // @ViewChild(FilterDirective, {static: true}) filterHost!: FilterDirective;
  @ViewChildren('dynamic', {read: ViewContainerRef}) dynamic!: QueryList<ViewContainerRef>;

  // filtersArray: Filter[] = [];
  
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private changeDetector: ChangeDetectorRef,
    public filtersHandler: FiltersHandlerService,
    // private router: Router,
    // private route: ActivatedRoute,
 ) { }

  ngOnInit(): void {
//     this.attributeArrayComplex
//       .pipe(takeUntil(this.destroy$))
//       .subscribe(array => {
//         this.filtersArray = this.filtersHandler.makeFiltersArray(array);
//         /* console.log(`-----attributeArrayComplex changed.
// Filters:`);
//         console.log(`1. make Filters[]
//         2. make 'SelectedFilters' from queryParams-----
//         3. init Filters[] from selectedFilters---------
//         4. send request to backend with current queryParams`);   */        
//       });
    // this.filtersArray = this.filtersHandler.makeFiltersArray(this.attributeArrayComplex);
    
  }

  ngAfterViewInit(): void {
    this.dynamic.changes
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {      
      this.filtersHandler.createFiltersComponents(this.dynamic);
      this.filtersHandler.initFilters();
      
      this.changeDetector.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
