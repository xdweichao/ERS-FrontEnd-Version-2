import { NgModule } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { TicketHomeComponent } from './Components/ticket-home/ticket-home.component';
import { CreateTicketComponent } from './Components/create-ticket/create-ticket.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},{
  path: 'Ticket_Home_Page',
  component: TicketHomeComponent
},{
  path: 'Create_Ticket_Page',
  component: CreateTicketComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
