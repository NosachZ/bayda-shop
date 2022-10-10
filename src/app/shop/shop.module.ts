import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CatalogComponent } from './_catalog/catalog/catalog.component';
import { AboutComponent } from './_support-pages/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentComponent } from './_support-pages/payment/payment.component';
import { CatalogSubmenuComponent } from './_catalog/catalog-submenu/catalog-submenu.component';
import { ServicePagesComponent } from './_support-pages/support-pages/service-pages.component';
import { BooleanFilterComponent } from './_category/filters-templates/boolean-filter/boolean-filter.component';
import { StringFilterComponent } from './_category/filters-templates/string-filter/string-filter.component';
import { NumberFilterComponent } from './_category/filters-templates/number-filter/number-filter.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './_category/category/category.component';
import { FilterDirective } from './filter.directive';
import { FiltersComponent } from './_category/filters/filters.component';
import { NumberRangeFilterComponent } from './_category/filters-templates/number-range-filter/number-range-filter.component'; 

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    ShopComponent,
    TopBarComponent,
    NavMenuComponent,
    CatalogComponent,
    AboutComponent,
    PaymentComponent,
    CatalogSubmenuComponent,
    ServicePagesComponent,
    BooleanFilterComponent,
    StringFilterComponent,
    NumberFilterComponent,
    HomeComponent,
    CategoryComponent,
    FilterDirective,
    FiltersComponent,
    NumberRangeFilterComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatCheckboxModule,
    NgxSliderModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [
    FilterDirective
  ]
})
export class ShopModule { }
