import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../modules/app-routing.module'

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    MenuComponent
  ]
})
export class LayoutModule { }
