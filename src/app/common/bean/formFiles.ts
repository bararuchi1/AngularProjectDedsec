import { FormGroup, Validators } from '@angular/forms';
import { AppValidatorsComponent } from '../validators/app-validators.component';

//FormGroup
export class formFiles {

  public static associateVal: any = {
    "product": "",
    "productCodeInAssociate": ["", Validators.required],
    "associateName": ["", [Validators.required]],
    "associateDateOfBirth": ["", [Validators.required, AppValidatorsComponent.associateAgeValidator]],
    "associateAdhaarNo": ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]]
  };
  public static productForm: any = {
    "product": "",
    "productCodeInAssociate": ["", Validators.required],
    "associateName": ["", [Validators.required]],
    "associateDateOfBirth": ["", [Validators.required, AppValidatorsComponent.associateAgeValidator]],
    "associateAdhaarNo": ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]]
  };
  public static formErrorMessages = {
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
      "associateAgeValidator": "Age of Associate must be between 18 years and 65 years."
    },
    "associateAdhaarNo": {
      "required": "Please provide Associate Adhaar Number",
      'pattern': "Adhaarnumber is must be a numerical value.",
      'minlength': 'Adhaar card number must be 16 digits.',
      'maxlength': 'Adhaar card number must be 16 digits.'
    },
    "productCodeGroup": {
      "validateProductCode": "Product Code must start with the productgroup.The first two letter must match with the product group ."
    },
    "productCodeInAssociate": {
      "required": "Select a product code from the drop down."
    }
  };
  public static formErrors = {
    "productGroup": "",
    "productCode": "",
    "productName": "",
    "productDesc": "",
    "associateName": "",
    "associateDateOfBirth": "",
    "associateAdhaarNo": "",
    "genericError": "",
    "productCodeGroup": "",
    "productCodeInAssociate": "",
    
  };
  constructor() {
  }
  public static ErrorMessagesCheck(group: FormGroup): any {
    //console.log(group);

    this.formErrors["productCodeGroup"] = '';
    if (group && !group.valid && group.touched && group.dirty) {
      // console.log(group);
      if (group.errors)
        Object.keys(group.errors).forEach((key: string) => {
          console.log(group);
          const genericErrors = this.formErrorMessages["productCodeGroup"];
          this.formErrors["productCodeGroup"] += genericErrors[key];
        });


    }
    Object.keys(group.controls).forEach((key: string) => {
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
          this.formErrors[key] += errorMessages[errorKeyOfErrors];
          //console.log('Erorr Key :' + errorKeyOfErrors);

        }

      }
      if (abst instanceof FormGroup) {
        this.ErrorMessagesCheck(abst);
      }


    });
    // console.log(JSON.stringify(this.formErrors));
    return this.formErrors;
  }

}