import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { BASE_URL } from '../base_url';
import { CategoryType, AttributeData } from '../shop/shop-interfaces';


interface attributeArray_tmp {
    attr: Attribute,
    values: {
      item: Pick<AttributeValue, 'id' | 'value'>,
      // initValue?: boolean
    }[]
  }



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  // backendURL = 'http://localhost:8080/';
  backendURL = '/api/';
  categoryURL = '/assets/backend-emul/categories.json';
  attributeURL = '/assets/backend-emul/attributes.json';
  attributeArrayURL = '/assets/backend-emul/attributesArray.json';
  modelBasedFiltersURL = '/assets/backend-emul/modelBasedFilters.json';
  modelURL = '/assets/backend-emul/models.json';



  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) { }

  getChildCategories(parentId: number | null) {
    if (parentId) {
      return this.http.get<CategoryType[]>(this.baseUrl + "Category/" + parentId + "/children");
      // return this.http.get<CategoryType[]>(this.backendURL + "Category/" + parentId + "/children");
    } else {
      return this.http.get<CategoryType[]>(this.baseUrl + "Category/root");
      // return this.http.get<CategoryType[]>(this.backendURL + "Category/root");
    }
  }

  getCategoryByName(category: string) {
    /* let options = { params: new HttpParams().set('getCategoryByName', category) };

    // return for local request (with filter)
    return this.http.get<SelectedCategory[]>(this.categoryURL, options)
      .pipe(map(data => 
        data.find(item => item!.name === category) ?? null
      )); */

    return this.http.get<CategoryType>(this.baseUrl + "Category?name=" + category);
  }

  getCategoryChain(selected: number) {
    /* let options = { params: new HttpParams().set('getCategoryChain', selected) };

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoryURL, options)
      .pipe(map(data => {
        let curCategory: CategoryType | undefined;
        curCategory = data.find(item => item.id == selected);

        let categoryChain: CategoryType[] = [];

        if(curCategory != undefined) {
          categoryChain.unshift(curCategory);
          while (curCategory.parentCategory) {
            let parent = data.find(item => item.id == curCategory?.parentCategory?.id);
            if (parent) { curCategory = parent };
            categoryChain.unshift(curCategory);
          }
        }
        return categoryChain;
      })); */
    
    return this.http.get<CategoryType[]>(this.baseUrl + "Category/" + selected + "/chain");
    
  }

  getAttributeArray(categoryChain: CategoryType[]) {
    let chainCategoriesId: number[] = [];
    categoryChain.forEach(category => chainCategoriesId.push(category.id));
    // console.log(chainCategoriesId.join(","));

    let options = { params: new HttpParams().set('getAttributeArray', chainCategoriesId.join(',')) };

    // return for local request (with filter)
    return this.http.get<attributeArray_tmp[]>(this.attributeArrayURL, options)
      .pipe(map(data => {
        let chainAttributeArray: AttributeData[] = [];
        for (let categoryId of chainCategoriesId) {
          for (let attribute of data) {
            for (let attrCategory of attribute.attr.categories) {
              if (attrCategory.id == categoryId) chainAttributeArray.push(attribute);
            }
          }
        }
        return chainAttributeArray;
      }));
  }




  // -------temp-----------

  

  

  

  getModelBasedFilters(category: number) {
    let options = { params: new HttpParams().set('getModelBasedFilters', category) };
    return this.http.get<attributeArray_tmp[]>(this.modelBasedFiltersURL, options);
  }


  // --------------work------
  

  getModels(categoryName: string, queryParams: Params): Observable<Model[]> {    
    let options = { 
      params: new HttpParams()
        .set('getModels', categoryName) 
        .set('queryParams', JSON.stringify(queryParams))
    };
    return this.http.get<Model[]>(this.modelURL, options);
  }

  getModel(model: string) {
    let options = { 
      params: new HttpParams().set('getModel', model) 
    };
    return this.http.get<Model[]>(this.modelURL, options)
      .pipe(map(data => 
        data.find(item => item!.name === model) ?? null
      ));
  }
}
