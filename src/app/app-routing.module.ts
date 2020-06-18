import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DedsecHomeComponent } from './dedsec-home/dedsec-home.component';
import { DedsecAboutComponent } from './dedsec-about/dedsec-about.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AddProdctsComponent } from './components/add-prodcts.component';
import { LogInComponent } from './components/log-in.component';
import { DashBoardComponent } from './components/dashboard/dash-board.component';
import { authenticateService } from './services/authenticate-service';
import{AddAssociateComponent} from './components/add-associate.component';
import{SignupFormComponent} from './components/signup-form/signup-form.component';
const routes: Routes = [

  { path: 'home', component: DedsecHomeComponent },
  { path: 'about', component: DedsecAboutComponent },
  { path: 'signup', component: SignupFormComponent },
  // { path: 'addProducts', component: AddProdctsComponent },
  { path: 'login', component: LogInComponent },
  {
    path: 'dashboard', component: DashBoardComponent, canActivate: [authenticateService], children: [
      {
        path: 'addProducts', // child route path
        component: AddProdctsComponent // child route component that the router renders
      },
    {
      path:'addAssociates',
      component:AddAssociateComponent
    }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
