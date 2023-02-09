import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  {
    path: 'form',
    component: FormComponent,
    children: [
      { path: 'table', component: TableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
