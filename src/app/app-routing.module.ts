import { NgModule } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { TicketHomeComponent } from './Components/ticket-home/ticket-home.component';


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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
