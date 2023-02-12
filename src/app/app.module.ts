import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { FormComponent } from './Components/form/form.component';
import { LoginComponent } from './Components/login/login.component';
import { TokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
