import { List_Product } from './../../../contracts/product/list_product';
import { ProductService } from './../../../services/common/models/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  dataSource: List_Product[] = [];
  async ngOnInit() {
    $(document).ready(function () {
      $('#table').DataTable();
    });
    this.getProducts();
  }

  async getProducts() {
    const allProducts: List_Product[] = await this.productService.list();
    this.dataSource = allProducts;
  }
}
