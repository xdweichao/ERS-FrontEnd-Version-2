import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import { set as setCookie, get as getCookie } from 'es-cookie';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  currentlyLoggedIn = false;

  //init values
  currentUser = {
    id: -1,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    roleid: -1
  };


  constructor(private router: Router, private httpClient: HttpClient) { }
    
  async loginHttp(credentials: {username: string, password: string}) {
    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };

    const url = 'http://localhost:8080/ers/login';
    const userObject = await this.httpClient.post(url, loginCredentials).toPromise();
    const userString = JSON.stringify(userObject);
    const userJSON = JSON.parse(userString);
    

    // if exist: net parsed data to usermodel
    // Sends user to ticket page
    if (userJSON.userid != null) {
      this.currentUser.id = userJSON.userid;
      this.currentUser.username = userJSON.username;
      this.currentUser.password = userJSON.password;
      this.currentUser.firstName = userJSON.firstname;
      this.currentUser.lastName = userJSON.lastname;
      this.currentUser.email = userJSON.email;
      this.currentUser.roleid = userJSON.role;
      this.router.navigateByUrl('/Ticket_Home_Page');
      this.currentlyLoggedIn = true;
    }
    const UserIDCookie = this.currentUser.id+"";
    setCookie('UserIDCookie', UserIDCookie);
    const Role = this.currentUser.roleid+"";
    setCookie('UserRoleIDCookie', Role);
    console.log('User ID Cookie: ' + getCookie('UserIDCookie'));
    console.log('Role ID Cookie:' + getCookie('UserRoleIDCookie'));
    
    
    return this.currentlyLoggedIn;
  }
}