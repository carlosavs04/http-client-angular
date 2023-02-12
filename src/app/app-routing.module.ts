import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { LoginComponent } from './Components/login/login.component';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, title: 'Login'},
  {
    path: 'form',
    component: FormComponent,
    children: [
      { path: 'table', component: TableComponent }
    ]
  },
  { path:'table', component: TableComponent, title: 'Table' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
