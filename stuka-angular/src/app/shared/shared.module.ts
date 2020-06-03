import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
