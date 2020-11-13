import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
  ]
})
export class LayoutModule { }
