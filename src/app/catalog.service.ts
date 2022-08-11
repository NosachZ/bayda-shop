import { Injectable, Type } from '@angular/core';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/assets/backend-emul/products';
import { HttpRequestsService } from './http-requests.service';
import { map, Observable } from 'rxjs';
import { BooleanFilterComponent } from './shop/filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from './shop/filters-templates/number-filter/number-filter.component';
import { StringFilterComponent } from './shop/filters-templates/string-filter/string-filter.component';

export interface SelectedCategoryComplex {
  selectedCategory: Pick<Category, 'id' | 'name' | 'title'> | null;
  categoryChain: Pick<Category, 'id' | 'title'>[] | null; //chain from root to selected category
  attributeArray: 
    {
      attr: Pick<Attribute, 'id' | 'name' | 'title' | 'type'>,
      values: Pick<AttributeValue, 'id' | 'data'>[]
    }[] | null; //array of attributes from categoryChain with attributeValues from models from categoryChain
}

type FilterTypes = BooleanFilterComponent | NumberFilterComponent | StringFilterComponent;

class Filter {
  constructor (component: Type<FilterTypes>, attr: Attribute, attrValues: Set<AttributeValue>) {}
}

// export interface SelectedCategory extends Omit<Category, "parentCategory" | "attributes"> {
//   parentCategory: Pick<Category, "id"> | null,
// }


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  selectedCategory: Pick<Category, 'id' | 'title' | 'hasChildren'> | null = null;
  categoryChain: Observable<Category[]> | null = null;
  attributeArray: Observable<Attribute[]> | null = null;
  attrFilterSet: Filter | null = null;

  constructor(private httpRequest: HttpRequestsService) { }

  catalogInit() {
    this.selectedCategory = null;
    this.categoryChain = null;
    this.attributeArray = null;
  }

  getChildCategories(parentId: number | null): Observable<Category[]> {
    return this.httpRequest.getChildCategories(parentId);
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryChain = this.httpRequest.getCategoryChain(category);
    this.categoryChain.subscribe(data => {
      this.attributeArray = this.httpRequest.getAttributeSet(data);
      // this.attributeSet.subscribe(attr => console.log(attr));
    });
    
    // this.categoryChain.subscribe(data => {console.log(data)});

  }

  
  
}
