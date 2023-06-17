import { FileUploadOptions } from './../../../../services/common/file-upload/file-upload.component';
import { Create_Product } from '../../../../contracts/product/create_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  @Output() fileUploadOptions:Partial<FileUploadOptions>={
    action:"upload",
    controller:"products",
    explanation:"Resimleri seçin",
    accept:".png,.jpg,.jpeg"
  };

  create(name: HTMLInputElement, description: HTMLInputElement) {
    const create_Product: Create_Product = new Create_Product();
    create_Product.name = name.value;
    create_Product.description = description.value;

    this.productService.create(create_Product);
  }
}
