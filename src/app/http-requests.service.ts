import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  categoriesURL = '/assets/categories.json';
  error: any;


  constructor(private http: HttpClient) { }

  // -------temp-----------
  // getSubCategories() {
  //   const options = { params: new HttpParams().set('parentId', 5) };
  //   return this.http.get<Category[]>(this.categoriesURL, options);
  // }

  // getAllCategories() {
  //   return this.http.get<Category[]>(this.categoriesURL);
  // }

  // getParentCategory(parentId: number) {
  //   let parent = categories.find(item => item.id == parentId)
  //   return parent ? parent : null;
  // }

  // --------------work------
  getChildCategories(parentId: number | null) {
    let options;
    if (parentId) {
      options = { params: new HttpParams().set('getChildCategories', parentId) };
    } else {
      options = { params: new HttpParams().set('getFirstLevelCategories', true) };
    }

    // return for backend request
    // return this.http.get<Category[]>(this.categoriesURL, options);

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoriesURL, options).pipe(map(data => data.filter(item => item.parentId == parentId)));
  }

  getCategoryChain(selected: Category): Observable<Category[]> {
    let options = { params: new HttpParams().set('getCategoryChain', selected.id) };
    // return for backend request
    // return this.http.get<Category[]>(this.categoriesURL, options);

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoriesURL, options).pipe(map(data => {
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


}
