import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class SharedModule { }