import { Component, OnInit } from '@angular/core';
import { loginModal } from '../Model/APIModels/UserAPI.model';
import { LoginService } from '../Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

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
constructor(private readonly loginService:LoginService,private readonly Route : Router) {}

Login(){
  console.log(this.loginData);
  this.loginService.GetLoginData(this.loginData).subscribe({
   next: (data)=>{
      if (data) {
        this.Route.navigate(["/Home"]).then(()=>{
          window.location.reload();
        });
      } else {

      }
    },
   error: (error)=>{
      console.log(error);
    },
    complete: () => console.log('Complete')
});
}

}
