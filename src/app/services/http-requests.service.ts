import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { AttributeData, CategoryComplexData, SelectedCategory } from '../shop/_category/category-data';



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

  backendURL = '/API/********************';
  categoryURL = '/assets/backend-emul/categories.json';
  attributeURL = '/assets/backend-emul/attributes.json';
  attributeArrayURL = '/assets/backend-emul/attributesArray.json';
  modelBasedFiltersURL = '/assets/backend-emul/modelBasedFilters.json';
  modelURL = '/assets/backend-emul/models.json';



  constructor(private http: HttpClient) { }

  // -------temp-----------

  getAttributeArray(categoryChain: Pick<Category, 'id' | 'title'>[]) {
    let chainCategoriesId: number[] = [];
    for (let item of categoryChain) {
      chainCategoriesId.push(item.id);
    }
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

  getCategoryChain(selected: number) {
    let options = { params: new HttpParams().set('getCategoryChain', selected) };

    // return for local request (with filter)
    return this.http.get<Category[]>(this.categoryURL, options)
      .pipe(map(data => {
        let curCategory: Pick<Category, 'id' | 'name' | 'title' | 'parentCategory'> | undefined;
        curCategory = data.find(item => item.id == selected);

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

    // return for local request (with filter)
    return this.http.get<SelectedCategory[]>(this.categoryURL, options)
      .pipe(map(data => 
        data.find(item => item!.name === category) ?? null
      ));
  }

  getModelBasedFilters(category: number) {
    let options = { params: new HttpParams().set('getModelBasedFilters', category) };
    return this.http.get<attributeArray_tmp[]>(this.modelBasedFiltersURL, options);
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
