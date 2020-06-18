import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DedsecHomeComponent } from './dedsec-home/dedsec-home.component';
import { DedsecAboutComponent } from './dedsec-about/dedsec-about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderFileComponent } from './common/header-file/header-file.component';
import { FooterComponent } from './common/header-file/footer-component.component';


import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AddProdctsComponent } from './components/add-prodcts.component';
import { LogInComponent } from './components/log-in.component';
import { DashBoardComponent } from './components/dashboard/dash-board.component';
import{authenticateService} from './services/authenticate-service';
import { AddAssociateComponent } from './components/add-associate.component';
import { UploadComponentComponent } from './components/upload/upload-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DedsecHomeComponent,
    DedsecAboutComponent,
    HeaderFileComponent,
    SignupFormComponent,
    AddproductComponent,
    AddProdctsComponent,
    LogInComponent,FooterComponent, DashBoardComponent, AddAssociateComponent, UploadComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
