import { Component, OnInit } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-catalog-sidebar',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.css']
})
export class CatalogSidebarComponent implements OnInit {

  faAngleRight = faAngleRight;

  categories1l!: Category[];

  constructor() { }

  ngOnInit(): void {
    this.categories1l = categories.filter(item => item.parent == null);
  }

}
