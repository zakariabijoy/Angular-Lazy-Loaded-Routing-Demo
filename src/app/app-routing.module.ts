import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'parent', component:ParentComponent },
  { path: 'orders', component:OrdersComponent },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
