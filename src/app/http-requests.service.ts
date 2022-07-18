import { Injectable } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor() { }

  getAllCategories(): Category[] {
    return categories;
  }

  getCategories(parent: number|null): Category[] {
    return categories.filter(item => item.parent == parent);
  }
}
