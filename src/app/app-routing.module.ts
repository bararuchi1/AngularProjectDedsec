import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DedsecHomeComponent } from './dedsec-home/dedsec-home.component';
import { DedsecAboutComponent } from './dedsec-about/dedsec-about.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
const routes: Routes = [

  { path: 'home', component: DedsecHomeComponent },
  { path: 'about', component: DedsecAboutComponent },
  { path: 'addProduct', component: AddproductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
