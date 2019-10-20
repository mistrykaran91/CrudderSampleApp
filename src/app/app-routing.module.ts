import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'customer', pathMatch: 'full'
  },
  {
    path: 'customer', component: CustomerListComponent
  },
  {
    path: 'customer/create', component: CustomerEditComponent, pathMatch: 'full'
  },
  {
    path: 'customer/:id', component: CustomerDetailsComponent
  },

  {
    path: 'customer/edit/:id', component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
