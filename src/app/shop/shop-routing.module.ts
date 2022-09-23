import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './_support-pages/about/about.component';
import { CatalogComponent } from './_catalog/catalog/catalog.component';
import { PaymentComponent } from './_support-pages/payment/payment.component';
import { ServicePagesComponent } from './_support-pages/support-pages/service-pages.component';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './_category/category/category.component';

const routes: Routes = [
  { path: '', component: ShopComponent, 
  children: [
    { path: '', component: HomeComponent },
    { path: 'about', component: ServicePagesComponent, 
    children: [ { path: '', component: AboutComponent} ] 
    },
    { path: 'payment', component: ServicePagesComponent, 
    children: [ { path: '', component: PaymentComponent} ] 
    },
    { path: 'catalog', component: CatalogComponent },
    { path: 'catalog/category/:selCategory', component: CategoryComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
