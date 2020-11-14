import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../route/app-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { SearchModule } from 'src/app/modules/store/search/search.module';

@NgModule({
  declarations: [ MainComponent ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    SearchModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
