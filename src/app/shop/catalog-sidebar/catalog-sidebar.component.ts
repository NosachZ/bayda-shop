import { Component, OnInit } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { HttpRequestsService } from 'src/app/http-requests.service';


@Component({
  selector: 'app-catalog-sidebar',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.css']
})
export class CatalogSidebarComponent implements OnInit {

  faAngleRight = faAngleRight;

  categories1level!: Category[];

  constructor(private http: HttpRequestsService) { }

  ngOnInit(): void {
    this.categories1level = this.http.getCategories(null);
  }

}
