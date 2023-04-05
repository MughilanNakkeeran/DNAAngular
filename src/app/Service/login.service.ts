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

  private BaseUrl ="https://localhost:44345/";

  GetLoginData(LoginModel : loginModal):Observable<any>{
    const getLoginData : SetLoginData = {
      userID : LoginModel.username,
      confirmPassword : LoginModel.password
    }

    console.log(getLoginData);

    return this.Clint.post<any>(this.BaseUrl + "User",getLoginData);
  }


}
