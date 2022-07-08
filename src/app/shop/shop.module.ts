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


@NgModule({
  declarations: [
    ShopComponent,
    TopBarComponent,
    NavMenuComponent,
    CatalogComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ShopModule { }
