import { Injectable, Type, ComponentRef, ViewContainerRef, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { EMPTY, map, Observable, Subject, switchMap } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { AttributeValue, AttrType, Category, Model } from 'src/app/_data-model/products';
import { AttributeData, AttributeValueType, CategoryComplexData, ModelType } from '../shop-interfaces';
import { BooleanFilterComponent } from './filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from './filters-templates/number-filter/number-filter.component';
import { NumberRangeFilterComponent } from './filters-templates/number-range-filter/number-range-filter.component';
import { StringFilterComponent } from './filters-templates/string-filter/string-filter.component';



export type FilterTypes = BooleanFilterComponent | NumberFilterComponent | NumberRangeFilterComponent | StringFilterComponent;

export class Filter {
  constructor (public component: Type<FilterTypes>, public data: AttributeData) {}
}

interface SelectedBooleanFilter {
  type: AttrType.BOOLEAN,
  values: boolean
}
interface SelectedNumberRangeFilter {
  type: AttrType.NUMBER_RANGE,
  values: {minValue: number, maxValue: number}
}
interface SelectedStringFilter {
  type: AttrType.STRING,
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

  private modelsRequestSource = new Subject<boolean>;
  modelsRequest$ = this.modelsRequestSource.asObservable();

  
  modelsData$: Observable<ModelType[]> = EMPTY;
  modelsData: ModelType[] = [];






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
    let response = this.httpRequest.getChildCategories(categoryComplexData.selectedCategory.id)
      .pipe(map(children => {
        categoryComplexData.childCategories = children;
        return categoryComplexData;
      }))
    return response;
  }

  getCategoryChain(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getCategoryChain(categoryComplexData.selectedCategory.id)
      .pipe(map(chain => {
        categoryComplexData.categoryChain = chain;
        return categoryComplexData;
      }))
    return response;
  }

  getAttributes(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getAttributes(categoryComplexData.categoryChain)
      .pipe(map(attributes => {
        categoryComplexData.attributes = attributes;
        return categoryComplexData;
      }))
    return response;
  }

  getAttributesData(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getAttributeValues(categoryComplexData.attributes)
      .pipe(map(attributeValues => {
        let attributeArray: AttributeData[] = [];
        for (let attribute of categoryComplexData.attributes) {
          let attributeItem: AttributeData = {} as AttributeData;
          attributeItem.attribute = attribute;
          attributeItem.values = attributeValues
            .filter(attrValue => attrValue.attribute.id == attribute.id)
            .map(attrValue => {
              let item: AttributeValueType = {} as AttributeValueType;
              item = attrValue;
              return item;
            });
          attributeArray.push(attributeItem);
        }
        categoryComplexData.attributeArray = attributeArray;
        return categoryComplexData;
      }))
    return response;
  }
  
  getModelBasedData(categoryComplexData: CategoryComplexData) {
    let response = this.httpRequest.getModelBasedValues(categoryComplexData.selectedCategory.id)
      .pipe(map(modelBasedFilters => {
        categoryComplexData.modelBasedFilters = modelBasedFilters;
        return categoryComplexData;
      }))
    return response;
  }

  makeFiltersArray(categoryComplexData: CategoryComplexData): Filter[] {1
    this.filtersArray.length = 0;

    let concatArray = categoryComplexData.modelBasedFilters.concat(categoryComplexData.attributeArray);

    for (let attributeData of concatArray) {
      let filter: Filter;

      switch (attributeData.attribute.type) {
        case AttrType.BOOLEAN:
          filter = new Filter(BooleanFilterComponent, attributeData);
          break;

        case AttrType.NUMBER_RANGE: 
          filter = new Filter(NumberRangeFilterComponent, attributeData);
          break;

        case AttrType.STRING: 
          filter = new Filter(StringFilterComponent, attributeData);
          break;

        case AttrType.NUMBER: 
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
      let paramValue = paramMap.get(filter.data.attribute.name);

      if (paramValue) {
        switch (filter.data.attribute.type) {
          case AttrType.BOOLEAN:
            this.selectedFilters[filter.data.attribute.name] = {type: AttrType.BOOLEAN, values: true};
            break;
  
          case AttrType.NUMBER_RANGE: 
            let range = paramValue.split("-");
            let values = {minValue: Number(range[0]), maxValue: Number(range[1])};
            this.selectedFilters[filter.data.attribute.name] = {type: AttrType.NUMBER_RANGE, values: values};
            break;
  
          case AttrType.STRING: 
            let valueIDs: Set<number> = new Set<number>(JSON.parse("[" + paramValue + "]"));
            this.selectedFilters[filter.data.attribute.name] = {type: AttrType.STRING, values: valueIDs};
            break;
  
          case AttrType.NUMBER: 
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

  modelsRequest() {
    this.modelsRequestSource.next(true);
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
        case AttrType.BOOLEAN:
          queryParams[key] = String(element.values);
          break;
        
        case AttrType.NUMBER_RANGE:
          queryParams[key] = `${element.values.minValue}-${element.values.maxValue}`;
          break;
        
        case AttrType.STRING:
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
      case AttrType.BOOLEAN:         
        this.switchBooleanFilter(name, type, value as BooleanFilterArg);
        break;
      
      case AttrType.STRING: 
        this.switchStringFilter(name, type, value as StringFilterArg);
        break;
      
      case AttrType.NUMBER_RANGE: 
        this.switchNumbnerRangeFilter(name, type, value as NumberRangeFilterArg);
        break;
      
      default: 
      console.error("switchFilter() for this filter type not implemented");
    }

    this.applyFilters();
  }
  
  private switchBooleanFilter(
    name: string, 
    type: AttrType.BOOLEAN, 
    value: BooleanFilterArg) {
    if (value) {
      this.selectedFilters[name] = {type: type, values: value};
    } else {
      delete this.selectedFilters[name];
    }
  }

  private switchStringFilter(
    name: string, 
    type: AttrType.STRING, 
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
    type: AttrType.NUMBER_RANGE, 
    value: NumberRangeFilterArg) {
      if (value.update) {
        this.selectedFilters[name] = {type: type, values: {minValue: value.min, maxValue:value.max}};
      } else {
        delete this.selectedFilters[name];
      }
  }

}
