import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ItemComponent } from './item/item.component';
import { PaginatorModule } from 'src/app/core/layout/components/paginator/paginator.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/core/layout/components/modal/modal.module';



@NgModule({
  declarations: [CatalogComponent, ItemComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    ReactiveFormsModule,
    ModalModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
