import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private PRODUCT_URL_GET = 'http://localhost:8080/getAllProducts';
  private PRODUCT_URL_ADD='http://localhost:8080/addProduct';
  constructor(private httpClientVar: HttpClient) {

  }
  getProducts() {
    return this.httpClientVar.get(this.PRODUCT_URL_GET);
  }
  addProduct(product) {
    return this.httpClientVar.post<any>(this.PRODUCT_URL_ADD, product);
  }
}
