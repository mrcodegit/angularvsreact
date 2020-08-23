import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { CitiesModule } from '../cities/cities.module';
import { HeroesModule } from '../heroes/heroes.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NavigationModule,
    CitiesModule,
    HeroesModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
