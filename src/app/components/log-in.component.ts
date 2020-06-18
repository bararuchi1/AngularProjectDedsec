import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userLogin: FormGroup;
  statusMessage: string;

  constructor(private fb: FormBuilder, private httpServ: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      "userId": [""],
      "userName": [""],
      "userPassword": [""],
      "userRole": ["select"],
      "userFullName": [""],
      "loginStatus": [""],
      "loginStatusCode": [""],
      "loginStatusMessage": [""]
    });
  }
  loginCheck(): void {
    console.log("Login Details:" + JSON.stringify(this.userLogin.value));
    this.httpServ.loginDetails(this.userLogin.value).subscribe((data) => {
      // console.log(data);

      this.userLogin.setValue(data);
      console.log(this.userLogin.value);
      const loginStatus: string = this.userLogin.get("loginStatus").value;
      const loginStatusMessage: string = this.userLogin.get("loginStatusMessage").value;
      // const loginStatusCode: number = data.loginStatusCode;
      if (loginStatus == "SUCCESS") {
        console.log(data);
        sessionStorage.setItem('sessionValue', JSON.stringify(data));
        this.router.navigate(['dashboard']);

      } else if (loginStatus == "NODATA") {
        console.log("Status Message :" + loginStatus);
        this.statusMessage = "Invalid User Name/Password.";

      } else {
        console.log("Status Message :" + loginStatus);
        this.statusMessage = "Some Error Occured.";
      }
    }, error => {
      this.statusMessage = "Some Error Occured.";

    });
  }

}
