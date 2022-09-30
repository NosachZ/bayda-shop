import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, EMPTY, switchMap, of, takeUntil, Subject } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { AttributeData, CategoryComplexData } from '../category-data';
import { FiltersHandlerService } from '../filters-handler.service';





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  selectedCategory: Observable<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null> = EMPTY;
  childCategories: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> = EMPTY;
  categoryChain: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> = EMPTY;
  priceRange: {minPrice: number, maxPrice: number} = {minPrice: 0, maxPrice: 20000};
  attributeArrayComplex: Observable<AttributeData[]> = EMPTY;


  categoryComplexData$: Observable<CategoryComplexData> = EMPTY;

  destroy$: Subject<boolean> = new Subject();
  modelsData$: Observable<Model[]> = EMPTY;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpRequest: HttpRequestsService,
    private filtersHandler: FiltersHandlerService
  ) { }

  ngOnInit(): void {
    // this.filtersHandler.downloadCategorySubscription();
    // this.categoryComplexData$ = this.filtersHandler.getCategory();
    // this.modelsData$ = this.filtersHandler.modelsData$;
    // -------------- logic moved to filters-handler, need rename "filters-handler" to "category-handler"
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe( params => {
        console.log("params");
        console.log(params);
        this.selectedCategory = this.filtersHandler.getSelectedCategory(params);
      });

    
    this.childCategories = this.selectedCategory
      .pipe(switchMap(category => 
        this.httpRequest.getChildCategories(category!.id)
      ));
    this.categoryChain = this.selectedCategory
      .pipe(switchMap(category => 
        this.httpRequest.getCategoryChain(category!)
      ));
    this.attributeArrayComplex = this.categoryChain
      .pipe(switchMap(categoryChain => 
        this.httpRequest.getAttributeArray(categoryChain)
      ));
  }

  resetFilters() {
    this.filtersHandler.resetFilters();    
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
