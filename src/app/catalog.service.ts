import { Injectable } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { HttpRequestsService } from './http-requests.service';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  selectedCategory: Category | null = null;
  // categoryChain: Category[] = [];
  categoryChain: Observable<Category[]> | null = null;

  constructor(private httpRequest: HttpRequestsService) { }

  catalogInit() {
    this.selectedCategory = null;
    this.categoryChain = null;
  }

  getChildCategories(parentId: number | null): Observable<Category[]> {
    return this.httpRequest.getChildCategories(parentId);
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryChain = this.httpRequest.getCategoryChain(category);
    // this.getCategoryChain();
  }

  /*getCategoryChain() {
    this.categoryChain.length = 0;
    let curCategory: Category;
    if (this.selectedCategory) {
      curCategory = this.selectedCategory;
      while (curCategory.parentId) {
        let parent = this.httpRequest.getParentCategory(curCategory.parentId);
        if (parent) { curCategory = parent };
        this.categoryChain?.push(curCategory);
      }
    }
    this.categoryChain.forEach(element => {
      alert(element.title);
    });
  }*/
  
}
