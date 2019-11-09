import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-home',
  templateUrl: './ticket-home.component.html',
  styleUrls: ['./ticket-home.component.css']
})
export class TicketHomeComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }


  logout(){
    this.router.navigateByUrl('/login');
  }

}
