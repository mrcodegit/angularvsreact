import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesModule } from '../heroes/heroes.module';
import { CitiesModule } from '../cities/cities.module';
import { NavigationModule } from '../navigation/navigation.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeroesModule,
    CitiesModule,
    NavigationModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
