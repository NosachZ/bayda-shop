import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Model } from 'src/app/_data-model/products';
import { BASE_URL } from '../base_url';
import { CategoryType, AttributeData, AttributeType, AttributeValueType, ModelType } from '../shop/shop-interfaces';


/* interface attributeArray_tmp {
    attr: Attribute,
    values: {
      item: Pick<AttributeValue, 'id' | 'value'>,
      // initValue?: boolean
    }[]
  } */



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  // backendURL = 'http://localhost:8080/';
  // backendURL = '/api/';
  // categoryURL = '/assets/backend-emul/categories.json';
  // attributeURL = '/assets/backend-emul/attributes.json';
  // attributeArrayURL = '/assets/backend-emul/attributesArray.json';
  modelBasedFiltersURL = '/assets/backend-emul/modelBasedFilters.json';
  modelURL = '/assets/backend-emul/models.json';



  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) { 

  }

  getChildCategories(parentId: number | null) {
    if (parentId) {
      return this.http.get<CategoryType[]>(this.baseUrl + "Category/" + parentId + "/children");
    } else {
      return this.http.get<CategoryType[]>(this.baseUrl + "Category/root");
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

  getAttributes(categoryChain: CategoryType[]): Observable<AttributeType[]> {
    let chainCategoriesId: number[] = [];
    categoryChain.forEach(category => chainCategoriesId.push(category.id));

    return this.http.get<AttributeType[]>(this.baseUrl + "Attribute?categories=" + chainCategoriesId.join(','));
  }

  getAttributeValues(attributes: AttributeType[]) {
    let attributesIds: number[] = [];
    attributes.forEach(attribute => attributesIds.push(attribute.id));

    return this.http.get<AttributeValueType[]>(this.baseUrl + "AttributeValue?attributes=" + attributesIds.join(','));
  }

  getModelBasedValues(category: number) {
    /* let options = { params: new HttpParams().set('getModelBasedFilters', category) };
    return this.http.get<AttributeData[]>(this.modelBasedFiltersURL, options); */
    return this.http.get<AttributeData[]>(this.baseUrl + "Model/modelBasedAttributes?category=" + category);
  }  
  
// ------------add request "api/Model/Category/<name>"???
  getModels(categoryName: string, queryParams: Params): Observable<ModelType[]> {    
    /* let options = { 
      params: new HttpParams()
        .set('getModels', categoryName) 
        .set('queryParams', JSON.stringify(queryParams))
    };
    return this.http.get<Model[]>(this.modelURL, options); */

    let queryParamsStrings: String[] = [];
    for (const [key, value] of Object.entries(queryParams)) {
      queryParamsStrings.push(key + "=" + value);
    }
    return this.http.get<ModelType[]>(this.baseUrl + "Model/Category/" + categoryName + this.queryParamsToString(queryParams));
  }

  getModel(model: string) {
    /* let options = { 
      params: new HttpParams().set('getModel', model) 
    };
    return this.http.get<Model[]>(this.modelURL, options)
      .pipe(map(data => 
        data.find(item => item!.name === model) ?? null
      )); */

      return this.http.get<ModelType>(this.baseUrl + "Model?name=" + model);
  }

  queryParamsToString(queryParams: Params) {
    let queryParamsStrings: String[] = [];
    for (const [key, value] of Object.entries(queryParams)) {
      queryParamsStrings.push(key + "=" + value);
    }
    return queryParamsStrings.length ? "?" + queryParamsStrings.join("&") : "";
  }
  

  // -------temp-----------

  /* getAttributeArray(categoryChain: CategoryType[]): Observable<AttributeData[]> {
    let chainCategoriesId: number[] = [];
    categoryChain.forEach(category => chainCategoriesId.push(category.id));

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
  } */


  

  
}
