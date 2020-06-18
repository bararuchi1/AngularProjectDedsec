import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  user: FormGroup;
  userList: FormGroup;
  anotherval: boolean = false;
  validationCheck: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userList = this.fb.group({
      "users": ["Testing Value"],
      "userList": this.fb.array([])
    });
    this.user = this.fb.group({
      "userEmail": [],
      "userName": []
    });
    this.validationCheck = this.fb.group({
      "userEmail": ["",Validators.required],
      "userName": ["",Validators.required]
    });
  }
  get getTheList(): FormArray {
    return this.userList.get("userList") as FormArray;
  }
  onClickSubmit(): void {
    //this.userList.get("users").setValue("");
    console.log("----------------------------Before------------------------------------------------------------------------------------------");

    for (let val of this.getTheList.controls) {
      console.log(val);

    }
    console.log("----------------------------AFTER------------------------------------------------------------------------------------------");
    this.getTheList.push(this.fb.group(this.user));
    for (let val of this.getTheList.controls) {
      console.log(val);


    }
    this.anotherval = true;
  }
  addAnotherVal(): void {
    this.anotherval = false;
  }
  fincalSave(): void {
    console.log("Final Save");
    console.log(this.userList);


  }
  checkValidation(): void {
    console.log(this.validationCheck.valid);
    console.log(this.validationCheck);
    console.log(this.validationCheck.get('userName').validator);

  }
  removeValidation(): void {
    //this.validationCheck.clearValidators();
    Object.keys(this.validationCheck.controls).forEach((key: string) => {
      //console.log(key);

      console.log(this.validationCheck.get(key).hasError('required'));
      //console.log(this.validationCheck.get("userEmail").hasError('required'));

      //console.log(this.validationCheck.get(key));
      this.validationCheck.get(key).clearValidators;
      this.validationCheck.get(key).updateValueAndValidity();
      //this.validationCheck.get(key).setErrors({});
      //this.validationCheck.get(key).setV
     // console.log(this.validationCheck.get(key));
    });
    console.log("Beforew----------------------------");
    
    console.log(this.validationCheck.get("userName").hasError('required'));
    console.log(this.validationCheck.get("userEmail").hasError('required'));
    
    //this.validationCheck.get("userName").setErrors({});
 
    
    //this.validationCheck.get("userEmail").setErrors({});

    //console.log();

   // console.log(this.validationCheck.get('userName').validator);


  }

}
