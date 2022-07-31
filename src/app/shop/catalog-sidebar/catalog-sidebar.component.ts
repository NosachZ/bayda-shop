import { Component, DoCheck, OnInit } from '@angular/core';
import { Category, Model, Instance, Attribute, AttributeValue } from 'src/assets/backend-emul/products';
import { CatalogService } from 'src/app/catalog.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-catalog-sidebar',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.css']
})
export class CatalogSidebarComponent implements OnInit, DoCheck {

  attributeSet!: Observable<Set<Attribute>> | null;

  constructor(private catalog: CatalogService) { 
  }

  ngOnInit(): void {
    // this.attributeSet?.subscribe(attr => console.log(attr));
  }

  ngDoCheck(): void {
    this.attributeSet = this.catalog.attributeSet;
  }
}
