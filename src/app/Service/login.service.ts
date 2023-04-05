import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { loginModal } from '../Model/APIModels/UserAPI.model';
import { Observable } from 'rxjs';
import { SetLoginData } from '../Model/APIModels/LoginData.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  private BaseUrl ="";

  GetLoginData(LoginModel : loginModal):Observable<any>{
    const getLoginData : SetLoginData = {
      userID : LoginModel.username,
      confirmPassword : LoginModel.password
    }

    return this.httpClient.post<any>(this.BaseUrl + "User",getLoginData);
  }


}
