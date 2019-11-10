import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { set as setCookie, get as getCookie } from 'es-cookie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  amount
  typeid 
  description 
  authorid

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/Ticket_Home_Page');
  }

  
  createTicket(){
    const container = {
      amount: this.amount,
      typeid: this.typeid,
      description: this.description,
      authorid: getCookie('UserIDCookie')
    }
    const url = 'http://localhost:8080/ers/ticket/EmpActions';
   this.httpClient.post(url,container, {withCredentials: true}).toPromise;

    this.router.navigateByUrl('/Ticket_Home_Page');
  }

}
