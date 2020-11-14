import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { PokeStoreModule } from './modules/store/store.module';
import { AppRoutingModule } from './core/modules/route/app-routing.module';
import { MainModule } from './core/modules/main/main.module';
import { cartReducer } from './modules/store/shared/reducers/cart.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { searchReducer } from './modules/store/shared/reducers/search.reducer';
import { AppStatesModel } from './modules/store/shared/interfaces/app-states.model';

export const appReducer: ActionReducerMap<AppStatesModel> = {
  cart: cartReducer,
  search: searchReducer,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    PokeStoreModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

