import { Component, Input, OnInit } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
  faAngleRight = faAngleRight;
  
  // childs: Category[] = [];
  // childs: Observable<Category[]> = this.http.getChildCategories(this.parentId).pipe(map(data => data.filter(item => item.parentId == this.parentId)));
  childs!: Observable<Category[]>;


  constructor(
    private httpRequest: HttpRequestsService,
    private catalog: CatalogService) { }

  ngOnInit(): void {
    this.childs = this.catalog.getChildCategories(this.parentId);
    /*this.http.getChildCategories(this.parentId).subscribe({
      next: (data: Category[]) => {
        // *************
        // this.childs = data;
        //temporary post-processing while backend is absent
        // this.childs = this.childs.filter(item => item.parentId == this.parentId)
        // *************
        // data = data.filter(item => item.parentId == this.parentId);        
        // this.childs = data;
      }, // success path
      error: error => this.error = error, // error path
    });
    if (this.error) console.error(this.error);*/
  }

  onCategoryClick(event: MouseEvent, category: Category) {
    this.catalog.selectCategory(category);
    event.stopPropagation();
  }

}
