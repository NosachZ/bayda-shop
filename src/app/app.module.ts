import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faCartShopping, faHouse, faMagnifyingGlass, faUserGear, faUserLock, faPersonHiking, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import { environment } from 'src/environments/environment';
import { BASE_URL } from './base_url';
registerLocaleData(localeUk, 'uk');



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
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    NgxSliderModule,

  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.apiBaseUrl
    }
  ],
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
    iconLibrary.addIcons(fasHeart, farHeart);
  }
}
