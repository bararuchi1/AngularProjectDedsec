import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DedsecHomeComponent } from './dedsec-home/dedsec-home.component';
import { DedsecAboutComponent } from './dedsec-about/dedsec-about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderFileComponent } from './common/header-file/header-file.component';

import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    DedsecHomeComponent,
    DedsecAboutComponent,
    HeaderFileComponent,
    SignupFormComponent,
    AddproductComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
