import { List_Product } from './../../../contracts/product/list_product';
import { Create_Product } from '../../../contracts/product/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  create(product: Create_Product) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe((result) => {
        alert('Başarılı');
      });
      debugger
  }

  async list(): Promise<List_Product[]> {
    const promiseData: Promise<List_Product[]> = this.httpClientService
      .get<List_Product[]>({
        controller: 'products',
      })
      .toPromise();
    return await promiseData;
  }
}
