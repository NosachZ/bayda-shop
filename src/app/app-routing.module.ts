import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopModule } from './shop/shop.module';

const routes: Routes = [
  //not lazy-loading
  { path: '', loadChildren: () => ShopModule },
  //classic lazy-loading
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
