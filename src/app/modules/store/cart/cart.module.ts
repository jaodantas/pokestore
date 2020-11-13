import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ModalModule } from 'src/app/core/layout/components/modal/modal.module';

@NgModule({
  declarations: [ CartComponent ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [ CartComponent ]

})
export class CartModule { }
