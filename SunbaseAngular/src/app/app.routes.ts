import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const routes: Routes = [{path: '', component: LoginComponent },
{ path: 'customer', component: CustomerComponent },{ path:'customer-list',component:CustomerListComponent}];

