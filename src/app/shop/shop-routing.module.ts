import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PaymentComponent } from './payment/payment.component';
import { ServicePagesComponent } from './service-pages/service-pages.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  // { path: '', component: ShopComponent, 
  // children: [
  //   { path: '', component: CatalogComponent },
  //   { path: 'about', component: AboutComponent },
  //   { path: 'payment', component: PaymentComponent }
  // ] }
  { path: '', component: ShopComponent, 
  children: [
    { path: '', component: CatalogComponent },
    { path: '', component: ServicePagesComponent, 
    children: [ { path: 'about', component: AboutComponent} ] 
    },
    { path: '', component: ServicePagesComponent, 
    children: [ { path: 'payment', component: PaymentComponent} ] 
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
