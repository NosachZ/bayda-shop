import { Component, Input, OnInit } from '@angular/core';
import { Category, Model, Instance, Attribute, AttributeValue } from 'src/assets/backend-emul/products';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { CatalogService } from 'src/app/catalog.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-submenu',
  templateUrl: './catalog-submenu.component.html',
  styleUrls: ['./catalog-submenu.component.css']
})
export class CatalogSubmenuComponent implements OnInit {

  @Input() parentId!: number | null;
  
  childs!: Observable<Category[]>;


  constructor(
    private httpRequest: HttpRequestsService,
    private catalog: CatalogService) { }

  ngOnInit(): void {
    this.childs = this.catalog.getChildCategories(this.parentId);
  }

  onCategoryClick(event: MouseEvent, category: Category) {
    this.catalog.selectCategory(category);
    event.stopPropagation();
  }

}
