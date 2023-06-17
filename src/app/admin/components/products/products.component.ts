import { List_Product } from './../../../contracts/product/list_product';
import { ProductService } from './../../../services/common/models/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList:  List_Product[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private productService: ProductService) {}

 ngOnInit(){
    $(document).ready(function () {
      $('.table').DataTable();
    });
    this.productList = [];
    this.getProducts();
  }

  async getProducts() {
    const allProducts: {products:List_Product[]}= await this.productService.list();
    
    this.productList =allProducts.products;
  }
}
