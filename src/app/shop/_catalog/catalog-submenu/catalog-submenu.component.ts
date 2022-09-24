import { Component, Input, OnInit } from '@angular/core';
import { Category, Model, Asset, Attribute, AttributeValue } from 'src/app/_data-model/products';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { Observable, EMPTY } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-catalog-submenu',
  templateUrl: './catalog-submenu.component.html',
  styleUrls: ['./catalog-submenu.component.scss']
})
export class CatalogSubmenuComponent implements OnInit {

  @Input() parentId!: number | null;
  
  childs$: Observable<Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'>[]> = EMPTY;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {
    this.childs$ = this.httpRequest.getChildCategories(this.parentId);
  }
}
