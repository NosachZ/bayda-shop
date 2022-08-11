import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentComponent } from './payment/payment.component';
import { CatalogSidebarComponent } from './catalog-sidebar/catalog-sidebar.component';
import { CatalogSubmenuComponent } from './catalog-submenu/catalog-submenu.component';
import { ServicePagesComponent } from './service-pages/service-pages.component';
import { BooleanFilterComponent } from './filters-templates/boolean-filter/boolean-filter.component';
import { StringFilterComponent } from './filters-templates/string-filter/string-filter.component';
import { NumberFilterComponent } from './filters-templates/number-filter/number-filter.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ShopComponent,
    TopBarComponent,
    NavMenuComponent,
    CatalogComponent,
    AboutComponent,
    PaymentComponent,
    CatalogSidebarComponent,
    CatalogSubmenuComponent,
    ServicePagesComponent,
    BooleanFilterComponent,
    StringFilterComponent,
    NumberFilterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ShopModule { }
