import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
