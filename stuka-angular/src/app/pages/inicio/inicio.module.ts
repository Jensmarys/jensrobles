import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

import { MatButtonModule } from '@angular/material/button';

/* Carousel */
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CarouselModule,
    MatButtonModule
  ]
})
export class InicioModule { }
