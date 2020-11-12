import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { StoreModule } from './modules/store/store.module';
import { AppRoutingModule } from './core/modules/route/app-routing.module';
import { MainModule } from './core/modules/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    StoreModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
