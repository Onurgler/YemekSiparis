import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodlistPageRoutingModule } from './foodlist-routing.module';

import { FoodlistPage } from './foodlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    IonicModule,
    FoodlistPageRoutingModule
  ],
  declarations: [FoodlistPage]
})
export class FoodlistPageModule {}
