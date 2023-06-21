import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClientService:HttpClientService) { }
  async CreateUser(){

  }
}
