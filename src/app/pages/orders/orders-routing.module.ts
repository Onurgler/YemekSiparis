import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPage } from './orders.page';
import { OrdersResolver } from './orders.resolver';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage,
    resolve: {
      data: OrdersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    OrdersResolver
  ]
})
export class OrdersPageRoutingModule {}
