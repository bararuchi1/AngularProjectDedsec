import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms'
import { JsonPipe } from '@angular/common';
import { AppValidatorsComponent } from '../common/validators/app-validators.component'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product-services.service';
import { formFiles } from '../common/bean/formFiles';
@Component({
  selector: 'app-add-prodcts',
  templateUrl: './add-prodcts.component.html',
  styleUrls: ['./add-prodcts.component.css']
})
export class AddProdctsComponent implements OnInit {
  productForm: FormGroup;

  associateDetail: FormGroup;
  val: string = "TYUUU";
  dummyArray: any[] = [];
  associateDetails: FormArray;
  genericMessages: string = "";
  //Form Error
  formErrorProduct = {
    "productGroup": "",
    "productCode": "",
    "productName": "",
    "productDesc": ""
  };
  formErrorAssociate = {
    "associateName": "",
    "associateDateOfBirth": "",
    "associateAdhaarNo": ""
  };
  formErrors = {
    "productGroup": "",
    "productCode": "",
    "productName": "",
    "productDesc": "",
    "associateName": "",
    "associateDateOfBirth": "",
    "associateAdhaarNo": "",
    "genericError": { "productError": "", "associateDetails": "" },
    "productCodeGroup": "",
    "productCodeInAssociate": "",
    "associateAgeValidator": ""

  };
  formErrorEmployee = {

  };
  formErrorMessages = {
    "productGroup": {
      "required": "Please enter Product Group",
      'min': 'Product group must be 2 digit.',
      'max': 'Product group must be 2 digit.'
    },
    "productCode": {
      "required": "Please enter Product Code",
      'min': 'Product code must be 4 digits.',
      'max': 'Product code must be 4 digits.'
    },
    "productName": {
      "required": "Please enter Product Name"
    },
    "productDesc": {
      "required": "Please enter Product Description"
    },
    "associateName": {
      "required": "Please enter Associate Name"
    },
    "associateDateOfBirth": {
      "required": "Please provide Date of Birth of Associate",
      "associateAgeValidator": "Age of associate must be above 18 years."
    },
    "associateAdhaarNo": {
      "required": "Please provide Associate Adhaar Number",
      'minlength': 'Adhaar card number must be 16 digits.',
      'maxlength': 'Adhaar card number must be 16 digits.'
    },
    "productCodeGroup": {
      "validateProductCode": "Product Code must start with the productgroup.The first two letter must match with the product group ."
    },
    "productCodeInAssociate": {
      "required": ""
    }
  };

  //Temp
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.associateDetails = this.fb.array(
      []
    );

    this.productForm = this.fb.group({

      "productCode": ["", [Validators.required, Validators.min(1000), Validators.max(9999)]],
      "productGroup": ["", [Validators.required, Validators.min(10), Validators.max(99)]],
      "productName": ["", [Validators.required]],
      "productDesc": ["", [Validators.required]],
      "associateDetails": this.fb.array(
        []
      )
    }, { validators: [AppValidatorsComponent.validateProductCode] });
    this.associateDetail = this.fb.group(formFiles.associateVal);
    this.employeeForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      email: [""]
    });

    this.actionOnFormvalueChange();
  }
  actionOnFormvalueChange(): void {

    this.productForm.get('productCode').valueChanges.subscribe(val => {


      //Create a new temp object then delete the associateDetails control


      //  console.log(tempProduct);
      this.associateDetail.patchValue({
        "productCodeInAssociate": val,
      });
    });
  }
  addProductReferenceToAssociate(): void {

    var associateArray: FormArray = this.getAssociates;
    //console.log(associateArray);

    associateArray.controls.forEach(obj => {
      //  console.log(obj);

      var tempProduct: any;
      tempProduct = this.productForm.value;
      delete tempProduct.associateDetails;
      obj.patchValue({
        "product": tempProduct
      });

    })

  }
  valueChangeValidation(): void {
    this.associateDetail.get('associateDateOfBirth').valueChanges.subscribe(val => {

    });
  }


  get getAssociates(): FormArray {
    return this.productForm.get("associateDetails") as FormArray
  }


  newAssociateObject(formGroup: FormGroup): FormGroup {
    /*
    Creting a formgroup object then copy the associateDetails to that local formgroup 
    object then push the object to the associateList array of the productGroup
    */
    var tempFormGroup: FormGroup = this.fb.group(formFiles.associateVal);
    Object.keys(formGroup.controls).forEach((key: string) => {
      tempFormGroup.get(key).patchValue(formGroup.get(key).value);
    })
    return tempFormGroup;
  }

  associateUnique(associateList: FormArray, associate: FormGroup): any {
    //this return exception 

    /*
    NON_UNIQUE_ADHAAR
    */
    const adhaarNumber = associate.get('associateAdhaarNo').value;
    for (let associateTemp of associateList.controls) {
      const existingAdhaarNumber: string = associateTemp.get('associateAdhaarNo').value;
      if (existingAdhaarNumber == adhaarNumber) {
        //
        return "An associate with same adhaar number already present in the list.";
      }
    }
    return false;

  }

  addAssociate(): void {
    this.formErrors.genericError.associateDetails = "";
    this.logKeyValuePair(this.productForm);
    this.logKeyValuePair(this.associateDetail);
    console.log("--------------------------------");



    if (this.productForm.valid && this.associateDetail.valid) {

      var ErrorMessage = this.associateUnique(this.getAssociates, this.associateDetail);
      console.log(ErrorMessage);
      if (ErrorMessage) {
        this.formErrors.genericError["associateDetails"] = ErrorMessage;
      } else {
        this.logKeyValuePair(this.associateDetail);
        this.getAssociates.push(this.newAssociateObject(this.associateDetail));

        this.associateDetail.disable();
        //Add product Reference
      }
    } else if (this.associateDetail.valid) {
      this.formErrors.genericError["associateDetails"] = "Please provide all the required details of product first before adding associates.";
    } else if (false) {
      this.formErrors.genericError["associateDetails"] = "Please provide all the required details  first before adding associates.";
    }
    // console.log(this.productForm.value)
  }
  addAnotherAssociate(): void {
    this.associateDetail.enable();
    // this.associateDetail.reset();
    this.associateDetail.patchValue({
      "associateName": "",
      "associateDateOfBirth": "",
      "associateAdhaarNo": "",
    });

  }
  setAssociateList(dummyArray: any[]): void {
    for (var formGroup in dummyArray) {
      // this.getAssociates.push();
    }
  }
  clearAssociatesList(){
    this.getAssociates.clear();
    this.addAnotherAssociate();

  }
  finalSubmit(): void {
    //console.log(this.productForm.value);

    // this.addAnotherAssociate();//To clear associate prev data
    this.logKeyValuePair(this.productForm);
    var finalSave: Boolean = false;

    // Check for associate details validation if more than one associate is added 
    //if no assiciate is added then show error message
    if (this.getAssociates.length > 0) {
      finalSave = true;
    } else {
      this.logKeyValuePair(this.associateDetail);
    }
    // console.log(this.associateDetail);



    if (this.productForm.valid && finalSave) {
      this.addProductReferenceToAssociate();
      console.log('---------------------------');
      console.log(this.productForm.getRawValue());


      this.productService.addProduct(this.productForm.value).subscribe(data => {
        this.genericMessages = '';
        this.formErrors.genericError["productError"] = '';
        const errCode = data.errorCode;

        if (errCode == '0') {
          this.genericMessages = "Product " + data.productCode + " successfully added. Click 'Add Another' button to input new product.";
          //this.associateDetails.disable;
          // this.productForm.disable;
          this.associateDetail.disable();
          this.productForm.disable();
        } else if (errCode == '101') {
          this.formErrors.genericError["productError"] = data.errorMessage;
        } else {
          this.formErrors.genericError["productError"] = "Error while saving the product.Please Try again.";
        }
      }, data => {
        // console.log(data);

        this.formErrors.genericError["productError"] = "Internal Server Error.";
      });


    }
  }
  addAnotherProduct(): void {
    this.associateDetail.enable();
    this.productForm.enable();
    this.associateDetail.reset();
    this.productForm.reset();
  }

  // function validateCustom(control:AbstractControl):{[key:String] :any | null}{

  // }


  logKeyValuePair(group: FormGroup): void {
    this.formErrors["productCodeGroup"] = '';
    // console.log(group);

    if (group && !group.valid && group.touched && group.dirty) {
      if (group.errors)
        Object.keys(group.errors).forEach((key: string) => {

          const genericErrors = this.formErrorMessages["productCodeGroup"];
          this.formErrors["productCodeGroup"] += genericErrors[key];
        });


    }
    Object.keys(group.controls).forEach((key: string) => {
      // console.log(key);

      const abst = group.get(key);

      // console.log("Key :" + key + " Value :" + abst.value);
      this.formErrors[key] = '';
      //this.formErrorAssociate[key] = '';
      //  console.log(abst);

      if (abst && !abst.valid) {
        // console.log(this.formErrorAssociate);
        //  console.log(this.formErrorProduct);
        // console.log(abst);
        const errorMessages = this.formErrorMessages[key];
        //  console.log(abst.errors);

        for (const errorKeyOfErrors in abst.errors) {
          //  console.log(errorMessages);
          //  console.log(this.formErrors);


          this.formErrors[key] += errorMessages[errorKeyOfErrors];
          //console.log('Erorr Key :' + errorKeyOfErrors);

        }

      }
      if (abst instanceof FormGroup) {
        this.logKeyValuePair(abst);
      }
      if (abst instanceof FormArray) {
        console.log(abst);

        for (const control of abst.controls) {
          if (control instanceof FormGroup) {
            this.logKeyValuePair(control);
          }
        }

      }
    }


    );
    // console.log(JSON.stringify(this.formErrors));
  }







}
