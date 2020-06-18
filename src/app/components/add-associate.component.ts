import { Component, OnInit } from '@angular/core';
import { formFiles } from '../common/bean/formFiles';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product-services.service';
@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.css']
})
export class AddAssociateComponent implements OnInit {
  associateDetail: FormGroup;
  dummyAssoc: FormGroup;
  productCodeList: any;
  product: FormGroup;
  formErrors: any = formFiles.formErrors;
  progress:any=0;
  constructor(private fb: FormBuilder, private prodService: ProductService) {

    this.associateDetail = this.fb.group(formFiles.associateVal);
    this.product = this.fb.group({ productCode: [""] });
    this.dummyAssoc = this.fb.group({
      productCode: [""]
    });

  //Set control for image file
  this.associateDetail.setControl("profilePicture", this.fb.control([""]));

  }

  ngOnInit(): void {
    this.getProductCodeList();
  }
  getProductCodeList(): void {
    this.prodService.getProductCodeList().subscribe((data: any) => {
      console.log(data);
      this.productCodeList = data;
      console.log(this.productCodeList);
    })


  }
  addAssociate(): void {

    this.associateDetail.setControl("product", this.product);
    this.associateDetail.get('product').patchValue({ "productCode": this.associateDetail.get("productCodeInAssociate").value });

    this.formErrors = formFiles.ErrorMessagesCheck(this.associateDetail);
    //this.associateDetail.disabled
    //console.log(this.associateDetail.value);

    if (this.associateDetail.valid) {
      console.log(JSON.stringify(this.associateDetail.value));
      this.prodService.addAssociate(this.associateDetail.value).subscribe((data: any) => {
        console.log(data);

      });
      // this.associateDetail.disable();

    }
  }
  addAnotherAssociate(): void {

  }
  onFileUpload(event){
    console.log("On File Upload");
    
    console.log(event);
    
  }
}
