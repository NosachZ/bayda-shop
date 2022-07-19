import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  selectedCategory = "No category selected!";

  constructor() { }

  selectCategory(id: string) {
    this.selectedCategory = id;
  }
}
