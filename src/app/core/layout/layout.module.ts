import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../modules/route/app-routing.module'

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
  ]
})
export class LayoutModule { }
