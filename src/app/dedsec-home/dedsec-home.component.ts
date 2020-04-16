import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-services.service';
import { Product } from '../common/bean/product';
@Component({
  selector: 'app-dedsec-home',
  templateUrl: './dedsec-home.component.html',
  styleUrls: ['./dedsec-home.component.css']
})
export class DedsecHomeComponent implements OnInit {
  product: Product;
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(function (data) {
      console.log('Product Details:' + JSON.stringify(data))
    }
    );
    this.productService.getProducts().subscribe((data: Response) => {
      console.log("This rod:" + JSON.stringify(data));
      this.products = JSON.parse(JSON.stringify(data));
      console.log("This rod2:" + JSON.stringify(this.products[0]));
    }
    );


  }


}
