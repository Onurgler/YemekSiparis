import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      {
        path:'foodlist',
        loadChildren:() => import('../pages/foodlist/foodlist.module').then(
          m => m.FoodlistPageModule
        )
      },
      {
        path:'orders',
        loadChildren:() => import('../pages/orders/orders.module').then(
          m => m.OrdersPageModule
        )
      },
      {
        path:'',
        loadChildren:() => import('../pages/foodlist/foodlist.module').then(
          m => m.FoodlistPageModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}  // --> HomeRouter
