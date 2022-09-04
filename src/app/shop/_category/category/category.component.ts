import { Component, Type, OnInit, DoCheck } from '@angular/core';
import { Observable, EMPTY, switchMap, of } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';




export interface CategoryComplexData {
  selectedCategory: Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null;
  childCategories: Pick<Category, 'id' | 'name' | 'title'>[];
  categoryChain: Pick<Category, 'id' | 'name' | 'title'>[]; //chain from root to selected category
  priceRange: {minPrice: number, maxPrice: number}; //min and max price of models from category branch
  attributeArray: 
    {
      attr: Omit<Attribute, 'categories'>,
      values: Pick<AttributeValue, 'id' | 'value'>[]
    }[]; //array of attributes from categoryChain with attributeValues from models from categoryChain
}




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory: Observable<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null> = EMPTY;

  childCategories: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> = EMPTY;
  categoryChain: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> = EMPTY;
  attributeArray: Observable<Attribute[]> = EMPTY;
  attributeArrayComplex: Observable<{
      attr: Omit<Attribute, 'categories'>,
      values: Pick<AttributeValue, 'id' | 'value'>[]
    }[]> = EMPTY;

  attributeArrayComplex_flat: {
    attr: Omit<Attribute, 'categories'>,
    values: Pick<AttributeValue, 'id' | 'value'>[]
  }[] = [];



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
    this.attributeArrayComplex.subscribe(data => {
      this.attributeArrayComplex_flat = data;
      // console.log(this.attributeArrayComplex_flat);
    });
    
    
    /*this.route.params.subscribe(params => {
      let categoryName = params['selCategory'];
      this.selectedCategory = this.httpRequest.getCategoryByName(categoryName);
      
      // this.selectedCategory.subscribe(category => {
      //   if (category != null) {
      //     if (category.hasChildren) {
      //       this.childCategories = this.httpRequest.getChildCategories(category.id);
      //     } 
      //   }
      // });
      this.childCategories = this.selectedCategory
        .pipe(switchMap(category => {
          return this.httpRequest.getChildCategories(category!.id);
        }));

      // this.selectedCategory.subscribe(category => {
      //   this.categoryChain = this.httpRequest.getCategoryChain(category!);
      //   this.categoryChain.subscribe(categoryChain => {
      //     this.attributeArray_full = this.httpRequest.getAttributeArray(categoryChain);
      //   })
      // })
    });*/

    

      
    

    
  }

  ngDoCheck() {}
}
