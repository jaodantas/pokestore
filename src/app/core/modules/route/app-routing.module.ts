import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from 'src/app/modules/store/store.component';
import { PokeStoreModule } from 'src/app/modules/store/store.module';

const routes: Routes = [
  { path: '', component: StoreComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PokeStoreModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
