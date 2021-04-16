import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpdetailComponent } from './employee/empdetail/empdetail.component';
import { EmplistComponent } from './employee/emplist/emplist.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'e-portal',
    component:EmployeeComponent,
    children:[{
      path:'',
      component:ShowempComponent
      },
      {
        path:'list',
        component:EmplistComponent
      },
      {
        path:':id',
        component:EmpdetailComponent
      }
    ],
   
   canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
