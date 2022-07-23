import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  categoriesURL = '/assets/categories.json';
  error: any;


  constructor(private http: HttpClient) { }

  // -------temp-----------
  getSubCategories() {
    const options = { params: new HttpParams().set('parentId', 5) };
    return this.http.get<Category[]>(this.categoriesURL, options);
  }

  getAllCategories() {
    return this.http.get<Category[]>(this.categoriesURL);
  }

  // --------------work------
  getChildCategories(parent: number | null) {
    let options;
    if (parent) {
      options = { params: new HttpParams().set('parentId', parent) };
    } else {
      options = { params: new HttpParams().set('getFirstLevel', true) };
    }
    
    return this.http.get<Category[]>(this.categoriesURL, options);
    // return this.http.get<Category[]>(this.categoriesURL);
    // return categories.filter(item => item.parentId == parent);
  }

  getParentCategory(parentId: number) {
    let parent = categories.find(item => item.id == parentId)
    return parent ? parent : null;
  }

  

}
