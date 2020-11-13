import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ItemComponent } from './item/item.component';
import { PaginatorModule } from 'src/app/core/layout/components/paginator/paginator.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CatalogComponent, ItemComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    ReactiveFormsModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
