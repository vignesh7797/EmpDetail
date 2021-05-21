import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './employee/emp-form/emp-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmplistComponent } from './employee/emplist/emplist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { EmpdetailComponent } from './employee/empdetail/empdetail.component';
import { LoginGuard } from './guard/login.guard';
import { PhonePipe } from './pipe/phone.pipe';
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from './auth/auth.component';
import { UserResolver } from './guard/user.resolver';
import { AuthGuard } from './guard/auth.guard';

import { NavigationModule } from "@progress/kendo-angular-navigation";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl'
import { DialogsModule } from '@progress/kendo-angular-dialog';






@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    EmplistComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    ShowempComponent,
    EmpdetailComponent,
    PhonePipe,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NavigationModule,
    LayoutModule,
    IconsModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DateInputsModule,
    GridModule,
    IntlModule,
    DialogsModule
  ],
  providers: [UserResolver,LoginGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
