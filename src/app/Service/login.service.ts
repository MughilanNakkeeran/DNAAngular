import { Injectable } from '@angular/core';
import { loginModal } from '../Model/APIModels/UserAPI.model';
import { Observable } from 'rxjs';
import { SetLoginData } from '../Model/APIModels/LoginData.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly Clint : HttpClient ) { }

  private BaseUrl ="";

  GetLoginData(LoginModel : loginModal):Observable<any>{
    const getLoginData : SetLoginData = {
      userID : LoginModel.username,
      confirmPassword : LoginModel.password
    }

    return this.Clint.post<any>(this.BaseUrl + "User",getLoginData);
  }


}
