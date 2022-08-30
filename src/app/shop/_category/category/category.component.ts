import { Component, Type, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BooleanFilterComponent } from '../filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from '../filters-templates/number-filter/number-filter.component';
import { StringFilterComponent } from '../filters-templates/string-filter/string-filter.component';



export interface SelectedCategoryComplexData {
  selectedCategory: Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null;
  childCategories: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> | null;
  categoryChain: Pick<Category, 'id' | 'title'>[] | null; //chain from root to selected category
  attributeArray: 
    {
      attr: Omit<Attribute, 'categories'>,
      // attr: Pick<Attribute, 'id' | 'name' | 'title' | 'type'>,
      values: Pick<AttributeValue, 'id' | 'value'>[]
    }[] | null; //array of attributes from categoryChain with attributeValues from models from categoryChain
}

type FilterTypes = BooleanFilterComponent | NumberFilterComponent | StringFilterComponent;

class Filter {
  constructor (component: Type<FilterTypes>, attr: Attribute, attrValues: Set<AttributeValue>) {}
}



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory!: Observable<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | undefined>;

  childCategories!: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> | null;
  categoryChain!: Observable<Pick<Category, 'id' | 'name' | 'title'>[]> | null;
  attributeArray!: Observable<Attribute[]> | null;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpRequest: HttpRequestsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let categoryName = params['selCategory'];
      this.selectedCategory = this.httpRequest.getCategoryByName(categoryName);
      
      this.selectedCategory.subscribe(category => {
        if (category?.hasChildren) {
          this.childCategories = this.httpRequest.getChildCategories(category!.id);
        } else {
          this.childCategories = null;
        }
      });

      this.selectedCategory.subscribe(category => {
        this.categoryChain = this.httpRequest.getCategoryChain(category!);
        this.categoryChain.subscribe(categoryChain => {
          this.attributeArray = this.httpRequest.getAttributeSet(categoryChain);
          this.attributeArray.subscribe();
        })
      })
    });

    

      
    

    
  }

  ngDoCheck() {}
}
