import { Create_Product } from '../../../../contracts/product/create_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  create(name: HTMLInputElement, description: HTMLInputElement) {
    const create_Product: Create_Product = new Create_Product();
    create_Product.name = name.value;
    create_Product.description = description.value;

    this.productService.create(create_Product);
  }
}
