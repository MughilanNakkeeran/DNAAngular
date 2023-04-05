import { Component, OnInit } from '@angular/core';
import { loginModal } from '../Model/APIModels/UserAPI.model';
import { LoginService } from '../Service/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginData : loginModal = {
  username:'',
  password:''
}
constructor(private readonly LoginService : LoginService,
  private readonly Route : ActivatedRoute ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
