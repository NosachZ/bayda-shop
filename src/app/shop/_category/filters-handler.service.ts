import { Injectable, Type, ComponentRef, ViewContainerRef, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { EMPTY, map, Observable, Subject, switchMap } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { AttributeValue, AttrType, BooleanAttribute, Category, Model } from 'src/app/_data-model/products';
import { CategoryComplexData } from './category-data';
import { BooleanFilterComponent } from './filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from './filters-templates/number-filter/number-filter.component';
import { NumberRangeFilterComponent } from './filters-templates/number-range-filter/number-range-filter.component';
import { StringFilterComponent } from './filters-templates/string-filter/string-filter.component';



export type FilterTypes = BooleanFilterComponent | NumberFilterComponent | NumberRangeFilterComponent | StringFilterComponent;

export class Filter {
  constructor (public component: Type<FilterTypes>, public data: any) {}
}

interface SelectedBooleanFilter {
  type: AttrType.Boolean,
  values: boolean
}
interface SelectedNumberRangeFilter {
  type: AttrType.NumberRange,
  values: {minValue: number, maxValue: number}
}
interface SelectedStringFilter {
  type: AttrType.String,
  values: Set<number>
}

export interface SelectedFilters {
  [name: string]: SelectedBooleanFilter | SelectedNumberRangeFilter | SelectedStringFilter
}

export type BooleanFilterArg = boolean;
export type NumberRangeFilterArg = {update: boolean, min: number, max: number};
export type StringFilterArg = number;

export interface ModelRequestParams {
  category: string,
  queryParams: Params
}



@Injectable({
  providedIn: 'root'
})
export class FiltersHandlerService {

  categoryData: CategoryComplexData = {} as CategoryComplexData;
  filtersArray: Filter[] = [];

  private selectedFilters: SelectedFilters = {};

  filterComponentRefArray: ComponentRef<FilterTypes>[] = [];

  // private modelsRequestSource = new Subject<ModelRequestParams>;
  private modelsRequestSource = new Subject<boolean>;
  // private modelsRequestSource = new Subject<string>;
  modelsRequest$ = this.modelsRequestSource.asObservable();

  
  modelsData$: Observable<Model[]> = EMPTY;
  modelsData: Model[] = [];






  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private httpRequest: HttpRequestsService) 
  { }

  getCategory(params: Params) {
    let response = this.httpRequest.getCategoryByName(params['selCategory'])
      .pipe(map(category => {
        let categoryComplexData: CategoryComplexData = {} as CategoryComplexData;
        categoryComplexData.selectedCategory = category;
        return categoryComplexData;
      }))
    return response;
  }

  getChildCategories(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getChildCategories(categoryComplexData.selectedCategory!.id)
      .pipe(map(children => {
        categoryComplexData.childCategories = children;
        // console.log(categoryComplexData);
        return categoryComplexData;
      }))
    return response;
  }

  getCategoryChain(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getCategoryChain(categoryComplexData.selectedCategory!.id)
      .pipe(map(chain => {
        categoryComplexData.categoryChain = chain;
        // console.log(categoryComplexData);
        return categoryComplexData;
      }))
    return response;
  }

  getAttributes(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getAttributeArray(categoryComplexData.categoryChain)
      .pipe(map(attributes => {
        categoryComplexData.attributeArray = attributes;
        // console.log(categoryComplexData);
        return categoryComplexData;
      }))
    return response;
  }

  getModelBasedFilters(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getModelBasedFilters(categoryComplexData.selectedCategory!.id)
      .pipe(map(modelBasedFilters => {
        categoryComplexData.modelBasedFilters = modelBasedFilters;
        // console.log(categoryComplexData);
        return categoryComplexData;
      }))
    return response;
  }

  modelsRequest() {
    this.modelsRequestSource.next(true);
  }

  makeFiltersArray(categoryComplexData: CategoryComplexData): Filter[] {
    this.filtersArray.length = 0;

    let array = categoryComplexData.modelBasedFilters.concat(categoryComplexData.attributeArray);
  
    for (let item of array) {
      let filter: Filter;

      switch (item.attr.type) {
        case AttrType.Boolean:
          filter = new Filter(BooleanFilterComponent, item);
          break;

        case AttrType.NumberRange: 
          filter = new Filter(NumberRangeFilterComponent, item);
          break;

        case AttrType.String: 
          filter = new Filter(StringFilterComponent, item);
          break;

        case AttrType.Number: 
          console.error("NumberFilter component not implemented");
          continue;
          break;
        default:
          console.error("Undefined filter type");
          continue; 
          break;
      }
      this.filtersArray.push(filter);
    }
    return this.filtersArray;
  }

  makeSelectedFilters(): void {
    this.selectedFilters = {};
    let paramMap = this.route.snapshot.queryParamMap;

    for (let filter of this.filtersArray) {
      let paramValue = paramMap.get(filter.data.attr.name);

      if (paramValue) {
        switch (filter.data.attr.type) {
          case AttrType.Boolean:
            this.selectedFilters[filter.data.attr.name] = {type: AttrType.Boolean, values: true};
            break;
  
          case AttrType.NumberRange: 
            let range = paramValue.split("-");
            let values = {minValue: Number(range[0]), maxValue: Number(range[1])};
            this.selectedFilters[filter.data.attr.name] = {type: AttrType.NumberRange, values: values};
            break;
  
          case AttrType.String: 
            let valueIDs: Set<number> = new Set<number>(JSON.parse("[" + paramValue + "]"));
            this.selectedFilters[filter.data.attr.name] = {type: AttrType.String, values: valueIDs};
            break;
  
          case AttrType.Number: 
            console.error("NumberFilter component not implemented");
            continue; 
            break;
          default:
            console.error("Undefined filter type");
            continue; 
            break;
        }
      }
    }
  }

  createFiltersComponents(dynamic: QueryList<ViewContainerRef>) {
    this.filterComponentRefArray = [];
    dynamic.forEach((vcr: ViewContainerRef, i: number) => {
      vcr.clear();
      let componentRef = vcr.createComponent(this.filtersArray[i].component);
      componentRef.instance.data = this.filtersArray[i].data;
      this.filterComponentRefArray.push(componentRef);
    });
  }

  initFilters(): void {
    for (let filter of this.filterComponentRefArray) {
      filter.instance.init(this.selectedFilters);
    }

    this.modelsRequest();
    // this.modelsData$ = this.httpRequest.getModels(this.categoryData.selectedCategory!.name, this.makeQueryParams());
  }

  applyFilters() {
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: this.makeQueryParams(), 
        // queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    );
    
    this.modelsRequest();
  }

  resetFilters() {
    console.log(this.filterComponentRefArray);
    
    this.selectedFilters = {};
    for (let filter of this.filterComponentRefArray) {
      filter.instance.reset();
    }

    this.modelsRequest();
    // this.modelsData$ = this.httpRequest.getModels(this.categoryData.selectedCategory!.name, this.makeQueryParams());
  }

  makeQueryParams(): Params {
    let queryParams: Params = {};
    
    for (const key in this.selectedFilters) {
      const element = this.selectedFilters[key];  
      switch (element.type) {
        case AttrType.Boolean:
          queryParams[key] = String(element.values);
          break;
        
        case AttrType.NumberRange:
          queryParams[key] = `${element.values.minValue}-${element.values.maxValue}`;
          break;
        
        case AttrType.String:
          queryParams[key] = [...element.values].join(',');
          break;
  
        default:
          console.error("makeQueryParams() for this filter type not implemented");
      }
    }

    return queryParams;
  }

  switchFilter(
    name: string, 
    type: AttrType, 
    value: BooleanFilterArg | NumberRangeFilterArg | StringFilterArg) {
    
      switch (type) {
      case AttrType.Boolean:         
        this.switchBooleanFilter(name, type, value as BooleanFilterArg);
        break;
      
      case AttrType.String: 
        this.switchStringFilter(name, type, value as StringFilterArg);
        break;
      
      case AttrType.NumberRange: 
        this.switchNumbnerRangeFilter(name, type, value as NumberRangeFilterArg);
        break;
      
      default: 
      console.error("switchFilter() for this filter type not implemented");
    }

    this.applyFilters();
  }
  
  private switchBooleanFilter(
    name: string, 
    type: AttrType.Boolean, 
    value: BooleanFilterArg) {
    if (value) {
      this.selectedFilters[name] = {type: type, values: value};
    } else {
      delete this.selectedFilters[name];
    }
  }

  private switchStringFilter(
    name: string, 
    type: AttrType.String, 
    value: StringFilterArg) {
      if ((name in this.selectedFilters) && ((this.selectedFilters[name] as SelectedStringFilter).values.has(value))) {
        (this.selectedFilters[name] as SelectedStringFilter).values.delete(value);
        if (!(this.selectedFilters[name] as SelectedStringFilter).values.size) delete this.selectedFilters[name];
        return;
      }

      if ((name in this.selectedFilters) && (!(this.selectedFilters[name] as SelectedStringFilter).values.has(value))) {
        (this.selectedFilters[name] as SelectedStringFilter).values.add(value);
        return;
      }

      this.selectedFilters[name] = {type: type, values: new Set([value])};
  }

  private switchNumbnerRangeFilter(
    name: string, 
    type: AttrType.NumberRange, 
    value: NumberRangeFilterArg) {
      if (value.update) {
        this.selectedFilters[name] = {type: type, values: {minValue: value.min, maxValue:value.max}};
      } else {
        delete this.selectedFilters[name];
      }
  }

}
