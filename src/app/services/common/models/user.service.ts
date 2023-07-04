import { Create_User } from './../../../contracts/user/create-user';
import { Observable, firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from 'src/app/entities/user';
import { Token } from 'src/app/contracts/token/token';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public httpClientService: HttpClientService) {}

  async create(user: User):Promise<Create_User> {
    const observable: Observable<Create_User | User> =
      this.httpClientService.post<Create_User | User>(
        {
          controller: 'users',
        },
        user
      );
    return await firstValueFrom(observable) as Create_User;
  }

  async login(userNameOrEmail: string, password: string): Promise<void> {
    const observable: Observable<any | Token> = this.httpClientService.post<
      any | TokenResponse
    >(
      {
        controller: 'users',
        action: 'login',
      },
      { userNameOrEmail, password }
    );

    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
    if (tokenResponse) {
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);
    }
  }
}
