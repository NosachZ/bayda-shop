import { Component, Input, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { Observable, EMPTY } from 'rxjs';
import { CategoryType } from '../../shop-interfaces';

@Component({
  selector: 'app-catalog-submenu',
  templateUrl: './catalog-submenu.component.html',
  styleUrls: ['./catalog-submenu.component.scss']
})
export class CatalogSubmenuComponent implements OnInit {

  @Input() parentId: number | null = null;
  
  childs$: Observable<CategoryType[]> = EMPTY;


  constructor(
    private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {
    this.childs$ = this.httpRequest.getChildCategories(this.parentId);
  }
}
