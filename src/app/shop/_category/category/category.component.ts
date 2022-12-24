import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap, takeUntil, Subject } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { FiltersHandlerService } from '../category-handler.service';
import { HttpRequestsService } from 'src/app/services/http-requests.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    public filtersHandler: FiltersHandlerService,
    private httpRequest: HttpRequestsService 
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(params => this.filtersHandler.getCategory(params)),
      switchMap(categoryComplexData => this.filtersHandler.getChildCategories(categoryComplexData)),
      switchMap(categoryComplexData => this.filtersHandler.getCategoryChain(categoryComplexData)),
      switchMap(categoryComplexData => this.filtersHandler.getAttributes(categoryComplexData)),
      switchMap(categoryComplexData => this.filtersHandler.getAttributesData(categoryComplexData)),
      switchMap(categoryComplexData => this.filtersHandler.getModelBasedData(categoryComplexData)),
      takeUntil(this.destroy$)
    )
    .subscribe(categoryComplexData => {
      this.filtersHandler.categoryData = categoryComplexData;
      this.filtersHandler.filtersArray = this.filtersHandler.makeFiltersArray(categoryComplexData);
      this.filtersHandler.makeSelectedFilters();
    });

    this.filtersHandler.modelsRequest$
    .pipe(
      switchMap(() => {
        let category = this.route.snapshot.params;
        let queryParams = this.filtersHandler.makeQueryParams();
        return this.httpRequest.getModels(category['selCategory'], queryParams)
      }),
      takeUntil(this.destroy$))
    .subscribe((data) => {
      this.filtersHandler.modelsData = data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
