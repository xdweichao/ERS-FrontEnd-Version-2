import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/Services/login.service';
import { TicketService } from 'src/app/Services/ticket.service';
import { set as setCookie, get as getCookie } from 'es-cookie';

@Component({
  selector: 'app-ticket-home',
  templateUrl: './ticket-home.component.html',
  styleUrls: ['./ticket-home.component.css']
})
export class TicketHomeComponent implements OnInit {

  constructor(private router: Router,
    private loggedIn: LoginService, private user: TicketService) { }

  public ticket = [];

  ngOnInit() {

    this.user.getTickets().subscribe(data => this.ticket = data);
  }


  logout() {
    this.loggedIn.currentlyLoggedIn = false
    setCookie('UserIDCookie', '0');
    setCookie('UserRoleIDCookie', '0');
    this.router.navigateByUrl('/login');
  }

  createTicket() {
    this.loggedIn.currentlyLoggedIn = false
    this.router.navigateByUrl('/Create_Ticket_Page');
  }

}
