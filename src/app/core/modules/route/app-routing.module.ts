import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from 'src/app/modules/store/store.component';
import { StoreModule } from 'src/app/modules/store/store.module';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
