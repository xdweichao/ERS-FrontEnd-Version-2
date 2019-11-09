import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername = '';
  inputPassword = '';
  invalidInput = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  async submit() {
    const verify = {
      username: this.inputUsername,
      password: this.inputPassword
    };

    const loginSuccessful = await this.loginService.loginHttp(verify);

    if (!loginSuccessful) {
      this.invalidInput = true;
    }

  }

}