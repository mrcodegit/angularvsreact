import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [HeroesComponent, HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroesComponent]
})
export class HeroesModule { }
