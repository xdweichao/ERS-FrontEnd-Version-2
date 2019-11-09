import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketInfo } from '../Models/TicketInfo';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private getTicketByUserIDUrl: string ='http://localhost:8080/ers/ticket/EmpActions';

  constructor(private http: HttpClient, private user: LoginService) { }
 
  getTickets(): Observable<TicketInfo[]>{
    return this.http.get<TicketInfo[]>(this.getTicketByUserIDUrl,{withCredentials: true});
  }

}
