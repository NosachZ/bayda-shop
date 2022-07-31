import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogService } from 'src/app/catalog.service';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { Category, Model, Instance, Attribute, AttributeValue } from 'src/assets/backend-emul/products';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, DoCheck {

  selectedCategory!: Category | null;
  categoryChain!: Observable<Category[]> | null;

  constructor(
    private catalog: CatalogService,
    private httpRequest: HttpRequestsService) { }

  ngOnInit(): void { }

  ngDoCheck() {
    this.selectedCategory = this.catalog.selectedCategory;
    this.categoryChain = this.catalog.categoryChain;
  }
  
}
