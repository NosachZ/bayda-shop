import { Component, Input, OnInit } from '@angular/core';
import { categories, Category, Model, Instance, Attribute, AttributeValue } from 'src/app/products';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog-submenu',
  templateUrl: './catalog-submenu.component.html',
  styleUrls: ['./catalog-submenu.component.css']
})
export class CatalogSubmenuComponent implements OnInit {

  @Input() parent!: Category;
  faAngleRight = faAngleRight;
  
  childs!: Category[];

  constructor() { }

  ngOnInit(): void {
    this.childs = categories.filter(item => item.parent?.id === this.parent.id);
  }

}
