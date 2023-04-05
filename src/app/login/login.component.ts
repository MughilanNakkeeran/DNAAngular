import { Component } from '@angular/core';
import { loginModal } from '../Model/APIModels/UserAPI.model';
import { LoginService } from '../Service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginData : loginModal = {
  username:'',
  password:''
}
constructor(private loginService:LoginService) {}

Login(){
  this.loginService.GetLoginData(this.loginData);
}

}
