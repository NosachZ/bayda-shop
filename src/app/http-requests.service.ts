import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category, Model, Instance, Attribute, AttributeValue } from 'src/assets/backend-emul/products';
import { SelectedCategoryComplex } from './catalog.service';



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  backendURL = '/API/********************';
  categoryURL = '/assets/backend-emul/categories.json';
  attributeURL = '/assets/backend-emul/attributes.json';

  error: any;


  constructor(private http: HttpClient) { }

  // -------temp-----------
  getAttributeSet(categoryChain: Category[]) {
    let chainCategoriesId: number[] = [];
    for (let item of categoryChain) {
      chainCategoriesId.push(item.id);
    }

    let options = { params: new HttpParams().set('getAttributeSet', chainCategoriesId.join(',')) };

    // return for backend request
    // return this.http.get<Set<Attribute>>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Set<Attribute>>(this.attributeURL, options).pipe(map(data => {
      let chainAttributeSet: Set<Attribute> = new Set<Attribute>([]);
      data = new Set(data);
      for (let item of data) {
        item.categoriesId = new Set(item.categoriesId);
      }
      
      for (let category of chainCategoriesId) {
        for (let attr of data) {
          if (attr.categoriesId.has(category)) chainAttributeSet.add(attr);
        }
      }
      return chainAttributeSet;
    }));
  }

  getCategoryChain(selected: Category): Observable<Category[]> {
    let options = { params: new HttpParams().set('getCategoryChain', selected.id) };
    // return for backend request
    // return this.http.get<Category[]>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoryURL, options).pipe(map(data => {
      let categoryChain: Category[] = [selected];
      let curCategory: Category;
      curCategory = selected;
      while (curCategory.parentId) {
        let parent = data.find(item => item.id == curCategory.parentId);
        if (parent) { curCategory = parent };
        categoryChain.unshift(curCategory);
      }
      return categoryChain;
    }));
  }

  // --------------work------
  getChildCategories(parentId: number | null) {
    let options;
    if (parentId) {
      options = { params: new HttpParams().set('getChildCategories', parentId) };
    } else {
      options = { params: new HttpParams().set('getFirstLevelCategories', true) };
    }

    // return for backend request
    // return this.http.get<Category[]>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoryURL, options).pipe(map(data => data.filter(item => item.parentId == parentId)));
  }

  getSelectedCategoryComplex(selected: Category): Observable<SelectedCategoryComplex>|void {
    let options = { params: new HttpParams().set('getSelectedCategoryComplex', selected.id) };
    // return for backend request
    // return this.http.get<Category[]>(this.backendURL, options);
  }
}
