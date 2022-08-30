import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { SelectedCategoryComplexData } from '../shop/_category/category/category.component';



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
  getAttributeSet(categoryChain: Pick<Category, 'id' | 'title'>[]) {
    let chainCategoriesId: number[] = [];
    for (let item of categoryChain) {
      chainCategoriesId.push(item.id);
    }

    let options = { params: new HttpParams().set('getAttributeArray', chainCategoriesId.join(',')) };

    // return for backend request
    // return this.http.get<Set<Attribute>>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Attribute[]>(this.attributeURL, options).pipe(map(data => {
      let chainAttributeArray: Attribute[] = [];
      // data = new Set(data);
      // for (let item of data) {
      //   item.categoriesId = new Set(item.categoriesId);
      // }
      
      for (let categoryId of chainCategoriesId) {
        for (let attr of data) {
          for (let attrCategory of attr.categories) {
            if (attrCategory.id == categoryId) chainAttributeArray.push(attr);
          }
        }
      }
      return chainAttributeArray;
    }));
  }

  getCategoryChain(selected: Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'>) {
    let options = { params: new HttpParams().set('getCategoryChain', selected.id) };
    // return for backend request
    // return this.http.get<Category[]>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoryURL, options).pipe(map(data => {
      
      let curCategory: Pick<Category, 'id' | 'name' | 'title' | 'parentCategory'> | undefined;
      curCategory = data.find(item => item.id == selected.id);

      let categoryChain: Pick<Category, 'id' | 'name' | 'title'>[] = [];

      if(curCategory != undefined) {
        categoryChain.unshift(curCategory);
        while (curCategory.parentCategory) {
          let parent = data.find(item => item.id == curCategory?.parentCategory?.id);
          if (parent) { curCategory = parent };
          categoryChain.unshift(curCategory);
        }
      }
      
      return categoryChain;
    }));
  }

  getCategoryByName(category: string) {
    let options = { params: new HttpParams().set('getCategoryByName', category) };

    // return for backend request
    // return this.http.get<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'>>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'>[]>(this.categoryURL, options)
      .pipe(map(data => {
        let respond = data.find(item => item.name === category);
        // if (respond != undefined) {
        //   return respond;
        // } else {
        //   return null;
        // }
        return respond ? respond : undefined;
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
    // return this.http.get<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'>[]>(this.backendURL, options);

    // return for local request (with filter)
    return this.http.get<Pick<Category, 'id' | 'name' | 'title' | 'parentCategory' | 'hasChildren'>[]>(this.categoryURL, options)
      .pipe(map(data => {
        return data.filter(item => item.parentCategory?.id == parentId)
      }));
  }

  getSelectedCategoryComplex(selected: number | string): Observable<SelectedCategoryComplexData> {
    let options;
    switch (typeof selected) {
      case "number": {
        options = { params: new HttpParams().set('getSelectedCategoryComplexById', selected) };
        break;
      }
      case "string": {
        options = { params: new HttpParams().set('getSelectedCategoryComplexByName', selected) };
      }
    }
    
    // return for backend request
    return this.http.get<SelectedCategoryComplexData>(this.backendURL, options);
  }
}
