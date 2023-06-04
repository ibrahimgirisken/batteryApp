import { Create_Product } from '../../../contracts/product/create_product';
import { HttpClientService } from './../../../services/common/http-client.service';
import { BaseComponent } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(private httpClientService: HttpClientService) {
    super();
  }
  ngOnInit(): void {

    this.httpClientService
      .get<Create_Product[]>({
        controller: "products"
      })
      .subscribe((data) => console.log(data));

      // this.httpClientService
      // .delete({
      //   controller:"products"
      // },"202989e8-583d-457a-9434-08db644e84d6")
      // .subscribe(
      //   (data) => console.log(data),
      //   (error)=>console.log(error)        
      // );
    // this.httpClientService
    //   .post(
    //     {
    //       controller: "products",
    //     },
    //     {
    //       name: "Kalem",
    //       description: "Kalem Açıklama",
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    // .put({
    //   controller:'products',
    // },
    // {
    //   id:"202989e8-583d-457a-9434-08db644e84d6",
    //   name:"Renkli Kalem",
    //   description:"Renkli Kalem açıklama"
    // })
    // .subscribe();

  }
}
