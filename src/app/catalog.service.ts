import { Injectable } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { HttpRequestsService } from './http-requests.service';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  selectedCategory: Category | null = null;
  categoryChain: Category[] = [];

  constructor(private http: HttpRequestsService) { }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.getCategoryChain();
  }

  getCategoryChain() {
    this.categoryChain.length = 0;
    let curCategory: Category;
    if (this.selectedCategory) {
      curCategory = this.selectedCategory;
      while (curCategory.parentId) {
        let parent = this.http.getParentCategory(curCategory.parentId);
        if (parent) { curCategory = parent };
        this.categoryChain?.push(curCategory);
      }
    }
    this.categoryChain.forEach(element => {
      alert(element.title);
    });;
  }
}
