import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from '../cities/cities.component';
import { HeroesComponent } from '../heroes/heroes.component';


const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent
  }, {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
