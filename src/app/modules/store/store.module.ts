import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { StoreComponent } from './store.component';
import { PaginatorModule } from 'src/app/core/layout/components/paginator/paginator.module';

@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    CommonModule,
    CartModule,
    CatalogModule,
    PaginatorModule,
  ],
  exports: [
    StoreComponent,
  ]
})
export class PokeStoreModule { }
