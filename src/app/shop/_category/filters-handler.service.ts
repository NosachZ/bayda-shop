import { Injectable, Type } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { AttributeValue, AttrType, BooleanAttribute } from 'src/app/_data-model/products';
import { AttributeData, AVAILABILITY_DATA, PRICE_DATA } from './category-data';
// import { Filter } from './filters/filters.component';
import { BooleanFilterComponent } from './filters-templates/boolean-filter/boolean-filter.component';
import { NumberFilterComponent } from './filters-templates/number-filter/number-filter.component';
import { NumberRangeFilterComponent } from './filters-templates/number-range-filter/number-range-filter.component';
import { StringFilterComponent } from './filters-templates/string-filter/string-filter.component';


type FilterTypes = BooleanFilterComponent | NumberFilterComponent | NumberRangeFilterComponent | StringFilterComponent;

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

interface SelectedFilters {
  [name: string]: SelectedBooleanFilter | SelectedNumberRangeFilter | SelectedStringFilter
}

export type BooleanFilterArg = boolean;
export type NumberRangeFilterArg = {update: boolean, min: number, max: number};
export type StringFilterArg = number;



@Injectable({
  providedIn: 'root'
})
export class FiltersHandlerService {

  selectedFilters: SelectedFilters = {};
  // private selectedFilters: SelectedFilters = {};

  private filtersArray: Filter[] = [];


  constructor(    
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  makeFiltersArray(array: AttributeData[], paramMap: ParamMap): Filter[] {
    this.filtersArray.length = 0;
    this.selectedFilters = {};

    array.unshift(AVAILABILITY_DATA, PRICE_DATA);
  
    for (let item of array) {
      let filter: Filter;
      let paramValue: string | null = paramMap.get(item.attr.name);;

      switch (item.attr.type) {
        case AttrType.Boolean:
          filter = new Filter(BooleanFilterComponent, item);
          filter.data.values[0].initItem = false;
          filter.data.values[1].initItem = false;
          if (paramValue) {
            filter.data.values[0].initItem = Boolean(paramValue);
            filter.data.values[1].initItem = Boolean(paramValue);
            this.selectedFilters[filter.data.attr.name] = {type: AttrType.Boolean, values: true}
          }
          break;

        case AttrType.NumberRange: 
          filter = new Filter(NumberRangeFilterComponent, item);
          filter.data.values.initItem = filter.data.values.item;
          if (paramValue) {
            let range = paramValue.split("-");
            filter.data.values.initItem = {minValue: Number(range[0]), maxValue: Number(range[1])};      
            this.selectedFilters[filter.data.attr.name] = {type: AttrType.NumberRange, values: filter.data.values.initItem}
          }
          break;

        case AttrType.String: 
          filter = new Filter(StringFilterComponent, item);
          // console.log("paramValue: " + paramValue);
          let valueIDs: Set<number>;
          if (paramValue) {
            valueIDs = new Set<number>(JSON.parse("[" + paramValue + "]"));
          } else {
            valueIDs = new Set();
          }
          
          // console.log("valueIDs:");
          // console.log(valueIDs);
          
          for (let attrValue of filter.data.values) {            
            if (valueIDs.has(attrValue.item.id)) {
              attrValue.initItem = true;                
            } else {
              attrValue.initItem = false;
            }
          }
          if (valueIDs.size) {
            this.selectedFilters[filter.data.attr.name] = {type: AttrType.String, values: valueIDs}
          }
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
    console.log(this.filtersArray);
    console.log(this.selectedFilters);

    return this.filtersArray;
  }

  makeSelectedFiltersFromQueryParams(params: Params, array: Filter[]) {
    this.selectedFilters = {};
    // console.log(params);
    // console.log(array);
    for (let paramName in params) {
      // console.log(paramName);
      // console.log(params[paramName]);
      let filter = array.find(f => f.data.attr.name === paramName);
      console.log(filter);
      if (filter) {
        switch (filter.data.attr.type) {
          case "boolean":
          // case AttrType.Boolean:         
            this.selectedFilters[paramName] = {type: AttrType.Boolean, values: true}
            break;
          case "string":
          // case AttrType.String:
            this.selectedFilters[paramName] = {type: AttrType.String, values: new Set(JSON.parse("[" + params[paramName] + "]"))}
            break;
          case "number-range":
          // case AttrType.NumberRange:          
            let range = params[paramName].split("-");
            // this.selectedFilters[paramName] = {type: AttrType.NumberRange, values: {min: Number(range[0]), max: Number(range[1])}}
            break;
        
          default:
            break;
        }
      }
      console.log(this.selectedFilters);
      
      
      
    }
    
  }

  applyFilters() {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: this.makeQueryParams(), 
        // queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  resetFilters() {
    this.selectedFilters = {};
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

}
