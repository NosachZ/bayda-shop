import { Injectable, Type } from '@angular/core';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/assets/backend-emul/products';
import { HttpRequestsService } from './http-requests.service';
import { map, Observable } from 'rxjs';
import { BooleanFilterComponent } from './shop/filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from './shop/filters-templates/number-filter/number-filter.component';
import { StringFilterComponent } from './shop/filters-templates/string-filter/string-filter.component';

export interface SelectedCategoryComplex {
  selectedCategory: Category | null;
  categoryChain: Category[] | null; //chain from root to selected category
  attributeSet: Set<Attribute> | null; //union of attribute Sets from categoryChain with filled field "attrAcceptableValues"
}

type FilterTypes = BooleanFilterComponent | NumberFilterComponent | StringFilterComponent;

class Filter {
  constructor (component: Type<FilterTypes>, attr: Attribute, attrValues: Set<AttributeValue>) {}
}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  selectedCategory: Category | null = null;
  categoryChain: Observable<Category[]> | null = null;
  attributeSet: Observable<Set<Attribute>> | null = null;
  attrFilterSet: Filter | null = null;

  constructor(private httpRequest: HttpRequestsService) { }

  catalogInit() {
    this.selectedCategory = null;
    this.categoryChain = null;
    this.attributeSet = null;
  }

  getChildCategories(parentId: number | null): Observable<Category[]> {
    return this.httpRequest.getChildCategories(parentId);
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryChain = this.httpRequest.getCategoryChain(category);
    this.categoryChain.subscribe(data => {
      this.attributeSet = this.httpRequest.getAttributeSet(data);
      // this.attributeSet.subscribe(attr => console.log(attr));
    });
    
    // this.categoryChain.subscribe(data => {console.log(data)});

  }

  
  
}
