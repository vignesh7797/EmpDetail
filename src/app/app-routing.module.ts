import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EmpdetailComponent } from './employee/empdetail/empdetail.component';
import { EmplistComponent } from './employee/emplist/emplist.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { UserResolver } from './guard/user.resolver';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'e-portal',
    component:EmployeeComponent,
    resolve:{users: UserResolver},
    children:[{

      path:'',
      component:EmplistComponent,
      },

      {
        path:':id',
        component:EmpdetailComponent
      }
    ],
   
   canActivate:[LoginGuard]
  },
  {
    path:'login',
    component:AuthComponent,
    canActivate:[AuthGuard],
    canDeactivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
