import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private PRODUCT_URL_GET = 'http://localhost:8081/getAllProducts';
  private PRODUCT_URL_ADD = 'http://localhost:8081/addProduct';
  private LOG_IN_URL = 'http://localhost:8081/login';
  private PRODUCT_CODE_LIST = 'http://localhost:8081/prodcutCodeList';
  private ASSOCIATE_URL_ADD = 'http://localhost:8081/addAssociate';
  constructor(private httpClientVar: HttpClient) {

  }
  getProducts() {
    return this.httpClientVar.get(this.PRODUCT_URL_GET);
  }
  addProduct(product) {
    return this.httpClientVar.post<any>(this.PRODUCT_URL_ADD, product);
  }
  addAssociate(associate) {
    return this.httpClientVar.post<any>(this.ASSOCIATE_URL_ADD, associate);
  }
  loginDetails(userDetails) {
    return this.httpClientVar.post<any>(this.LOG_IN_URL, userDetails);
  }
  getProductCodeList() {
    return this.httpClientVar.get(this.PRODUCT_CODE_LIST);
  }

}
