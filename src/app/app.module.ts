import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faCartShopping, faHouse, faMagnifyingGlass, faUserGear, faUserLock, faPersonHiking } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShopModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faHouse);
    iconLibrary.addIcons(faAngleRight);
    iconLibrary.addIcons(faMagnifyingGlass);
    iconLibrary.addIcons(faUserLock);
    iconLibrary.addIcons(faUserGear);
    iconLibrary.addIcons(faCartShopping);
    iconLibrary.addIcons(faPersonHiking);
  }
}
