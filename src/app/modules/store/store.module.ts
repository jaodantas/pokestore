import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    CommonModule,
    CartModule,
    CatalogModule,
  ],
  exports: [
    StoreComponent,
  ]
})
export class StoreModule { }
