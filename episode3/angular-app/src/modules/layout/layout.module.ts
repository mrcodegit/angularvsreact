import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from '../cities/cities.component';
import { CitiesModule } from '../cities/cities.module';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroesModule } from '../heroes/heroes.module';
import { NavigationModule } from '../navigation/navigation.module';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'heroes'
  },
  {
    path: 'cities',
    component: CitiesComponent
  }, {
    path: 'heroes',
    component: HeroesComponent
  }
];


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NavigationModule,
    CitiesModule,
    HeroesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }