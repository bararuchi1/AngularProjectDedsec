import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/bean/product';
import { ProductService } from '../../services/product-services.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  Product: Product = {
    productId: "",
    errorCode: "",
    errorMessage: "",
    listAssociates: [],
    productCode: -1,
    productDesc: '',
    productGroup: -1,
    productName: ''

  };
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onClickSubmit(data) {
    console.log("Add Data :" + JSON.stringify(data));
    this.productService.addProduct(data)
      .subscribe(
        data => {
          this.Product = data;
          
        }
      )
   
  }
 
}
