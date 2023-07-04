import { Create_Product } from '../../../contracts/product/create_product';
import { HttpClientService } from './../../../services/common/http-client.service';
import { BaseComponent } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import { List_Product } from 'src/app/contracts/product/list_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  productList:Create_Product[];
  constructor(private productService:ProductService) {
    super();
  }
  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(){
    const allProducts:{products:List_Product[]}= await this.productService.list();
    this.productList=allProducts.products;
  }
}
