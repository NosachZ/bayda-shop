import { Injectable, Type, ComponentRef, ViewContainerRef, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { AttributeValue, AttrType, BooleanAttribute } from 'src/app/_data-model/products';
import { AttributeData, AVAILABILITY_DATA, CategoryComplexData, PRICE_DATA } from './category-data';
// import { Filter } from './filters/filters.component';
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



@Injectable({
  providedIn: 'root'
})
export class FiltersHandlerService {

  private categoryData$: Observable<CategoryComplexData> = EMPTY;

  private filtersArray: Filter[] = [];

  private selectedFilters: SelectedFilters = {};

  filterComponentRefArray: ComponentRef<FilterTypes>[] = [];

  dynamic!: QueryList<ViewContainerRef>



  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private httpRequest: HttpRequestsService) 
  { }

  downloadCategorySubscription(): void {
    this.categoryData$ = this.route.params
      .pipe(switchMap(params =>
        this.httpRequest.getCategoryComplexData(params['selCategory'])
      ));
  }

  getCategory(): Observable<CategoryComplexData> {
    return this.categoryData$;
  }

  // ------------------------------------------

  makeFiltersArray(array: AttributeData[]): Filter[] {
    this.filtersArray.length = 0;

    array.unshift(AVAILABILITY_DATA, PRICE_DATA);
  
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

  initFiltersfromQueryParams(): void {
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

    for (let filter of this.filterComponentRefArray) {
      filter.instance.init(this.selectedFilters);
    }
  }

  applyFilters() {
    console.log(`1. update url queryParams
    2. send request to backend with current queryParams`);
    
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: this.makeQueryParams(), 
        // queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  resetFilters() {
    console.log(`filters-handler resetFilters:
      1. ++ make 'SelectedFilters' from queryParams-----
      2. ++ init Filters[] from selectedFilters---------
      3. send request to backend with current queryParams`);
    
    this.selectedFilters = {};
    for (let filter of this.filterComponentRefArray) {
      filter.instance.reset();
    }
  }

  makeQueryParams(): Params {
    let queryParams: Params = {};
    
    // for (const key in this.test1) {
    //   const element = this.test1[key];
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


  initFilterComponents(dynamic: QueryList<ViewContainerRef>) {
    this.filterComponentRefArray = [];
    dynamic.forEach((vcr: ViewContainerRef, i: number) => {
      vcr.clear();
      let componentRef = vcr.createComponent(this.filtersArray[i].component);
      componentRef.instance.data = this.filtersArray[i].data;
      this.filterComponentRefArray.push(componentRef);
    });
  }

}
