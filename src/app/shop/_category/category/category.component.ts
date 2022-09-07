import { Component, OnInit, } from '@angular/core';
import { Observable, EMPTY, switchMap, of } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AttributeData, CategoryComplexData } from '../category-data';





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  selectedCategory: Observable<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null> = EMPTY;
  childCategories: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> = EMPTY;
  categoryChain: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> = EMPTY;
  priceRange: {minPrice: number, maxPrice: number} = {minPrice: 0, maxPrice: 20000};
  attributeArrayComplex: Observable<AttributeData[]> = EMPTY;


  categoryComplexData: Observable<CategoryComplexData> = EMPTY;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpRequest: HttpRequestsService
  ) { }

  ngOnInit(): void {
    this.selectedCategory = this.route.params
      .pipe(switchMap(params => {
        return this.httpRequest.getCategoryByName(params['selCategory']);
      }));
    this.childCategories = this.selectedCategory
      .pipe(switchMap(category => {
        return this.httpRequest.getChildCategories(category!.id);
      }));
    this.categoryChain = this.selectedCategory
      .pipe(switchMap(category => {
        return this.httpRequest.getCategoryChain(category!);
      }));
    this.attributeArrayComplex = this.categoryChain
      .pipe(switchMap(categoryChain => {
        return this.httpRequest.getAttributeArray(categoryChain);
      }));
  }

}
