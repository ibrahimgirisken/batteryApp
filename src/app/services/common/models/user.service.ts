import { Create_User } from './../../../contracts/user/create-user';
import { Observable, firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from 'src/app/entities/user';
import { Token } from 'src/app/contracts/token/token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public httpClientService: HttpClientService) {}
  async create(user: User) {
    const observable: Observable<Create_User | User> =
      this.httpClientService.post<Create_User | User>(
        {
          controller: 'users',
        },
        user
      );
    return (await firstValueFrom(observable)) as Create_User;
  }

  async login(userNameOrEmail:string,password:string):Promise<any> {
   const observable:Observable<any | Token>= this.httpClientService.post<any | Token>({
      controller:'users',
      action:"login"
    },{userNameOrEmail,password});
   const token:Token= await firstValueFrom(observable) as Token;
   if(token){
   localStorage.setItem("accessToken",token.accessToken);
   }
  }
}
