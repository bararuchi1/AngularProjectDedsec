import { AbstractControl, FormArray, FormGroup, FormControl } from '@angular/forms'

export class AppValidatorsComponent {
  public static validateProductCode(control: AbstractControl): { [key: string]: any } | null {
    // console.log(control);

    const productGroup: string = control.get('productGroup').value + '';
    const productCode: string = control.get('productCode').value + '';



    //console.log("validateProductCode Called"+productCode+" Product group "+productGroup);
    //console.log("Product Code :" + productCode + " Product Group :" + productGroup);
    // console.log(productGroup != null && productCode != null && productCode.substring(0, 2) == productGroup);

    if (productGroup != null && productCode != null && productCode.substring(0, 2) == productGroup)
      return null;
    else {

      return { "validateProductCode": true };
    }
  }
  public static associateAgeValidator(control: AbstractControl): { [key: string]: any } | null {
    // console.log(control);

    const dateOfBirth: Date = new Date(control.value);
    if (dateOfBirth) {
      // console.log('Date of Birth ' + dateOfBirth);
      const sysDate: Date = new Date();
      //  console.log('System Date ' + sysDate);
      var diff = Math.abs(sysDate.getTime() - dateOfBirth.getTime());
      var months = Math.ceil(diff / (1000 * 3600 * 24 * 30));
      var years = Math.ceil(months / 12);
      // console.log("Months :" + months + " Years :" + years);
      if (years < 18 || years > 65) {
        //console.log('Age Validator');
        return null;
        //return { "associateAgeValidator": true };
      } else {
        return null;
      }
    } else {
      return null;
    }

  }

  // public static validateUniqueAdhaarNumber(control: AbstractControl): { [key: string]: any } | null {
  //   // console.log(control);
  //   const arrayList: FormArray = control.get('associateDetails') as FormArray;
  //   /*
  //   The associate list in the Product form group must contains unique associate i.e unique adhaar id
  //   */
  //   for (let control of arrayList.controls) {
  //     var adhaarNumber=control.get('associateAdhaarNo').value;
  //     console.log(adhaarNumber);
      
  //   }

  //   return null;

  // }


}


