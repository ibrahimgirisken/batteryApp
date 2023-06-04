import { List_Product } from './../../../contracts/product/list_product';
import { ProductService } from './../../../services/common/models/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    $(document).ready(function() {
      $('#table').DataTable();
    });
  }

}
