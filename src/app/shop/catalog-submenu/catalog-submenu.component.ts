import { Component, Input, OnInit } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { HttpRequestsService } from 'src/app/http-requests.service';

@Component({
  selector: 'app-catalog-submenu',
  templateUrl: './catalog-submenu.component.html',
  styleUrls: ['./catalog-submenu.component.css']
})
export class CatalogSubmenuComponent implements OnInit {

  @Input() parent!: number;
  faAngleRight = faAngleRight;
  
  childs!: Category[];

  constructor(private http: HttpRequestsService) { }

  ngOnInit(): void {
    this.childs = this.http.getCategories(this.parent);
  }

}
