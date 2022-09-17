import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AttrType } from 'src/app/_data-model/products';



interface SelectedFilters {
  [name: string]: {
    type: AttrType,
    // values: boolean | {min: number, max: number} | Set<number>
    values: any

  }  
}



@Injectable({
  providedIn: 'root'
})
export class FiltersHandlerService {

  private selectedFilters: SelectedFilters = {};

  // test1: SelectedFilters = {
  //   nalichie: {type: AttrType.Boolean,     values: true},
  //   price:    {type: AttrType.NumberRange, values: {min: 1, max: 2}},
  //   brand:    {type: AttrType.String,      values: new Set([1,2])}
  // }

  constructor(    
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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
          queryParams[key] = `${element.values.min}-${element.values.max}`;
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
    value: boolean | {update: boolean, min?: number, max?: number} | number) {
    
      switch (type) {
      case AttrType.Boolean:         
        this.switchBooleanFilter(name, type, value as boolean);
        break;
      
      case AttrType.String: 
        this.switchStringFilter(name, type, value as number);
        break;
      
      case AttrType.NumberRange: 
        this.switchNumbnerRangeFilter(name, type, value as {update: boolean, min?: number, max?: number});
        break;
      
      default: 
      console.error("switchFilter() for this filter type not implemented");
    }

    this.applyFilters();
  }
  
  private switchBooleanFilter(
    name: string, 
    type: AttrType, 
    value: boolean) {
    if (value) {
      this.selectedFilters[name] = {type: type, values: value};
      // console.log(this.selectedFilters[name]);
      
      // this.selectedFilters[name].values = value;
    } else {
      delete this.selectedFilters[name];
      // console.log(this.selectedFilters[name]);
    }
  }

  private switchStringFilter(
    name: string, 
    type: AttrType, 
    value: number) {
      if ((name in this.selectedFilters) && (this.selectedFilters[name].values.has(value))) {
        this.selectedFilters[name].values.delete(value);
        if (!this.selectedFilters[name].values.size) delete this.selectedFilters[name];
        return;
      }

      if ((name in this.selectedFilters) && (!this.selectedFilters[name].values.has(value))) {
        this.selectedFilters[name].values.add(value);
        return;
      }

      this.selectedFilters[name] = {type: type, values: new Set([value])};
    }

  private switchNumbnerRangeFilter(
    name: string, 
    type: AttrType, 
    value: {update: boolean, min?: number, max?: number}) {
      if (value.update) {
        this.selectedFilters[name] = {type: type, values: {min: value.min, max:value.max}};
      } else {
        delete this.selectedFilters[name];
      }
    }

}
