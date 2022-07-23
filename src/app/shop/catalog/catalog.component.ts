import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, DoCheck {

  selectedCategory!: Category | null;
  // categories: Category[] = [];

  error: any;

  constructor(
    private catalog: CatalogService,
    private http: HttpRequestsService) { }

  ngOnInit(): void {
    // this.http.getSubCategories().subscribe({
    //   next: (data: Category[]) => this.categories = data.filter(item => item.parentId == null), // success path
    //   error: error => this.error = error, // error path
    // });
    // console.log(this.error);
    
  }

  ngDoCheck() {
    this.selectedCategory = this.catalog.selectedCategory;
  }

}
