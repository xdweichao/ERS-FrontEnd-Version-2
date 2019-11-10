import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { TicketHomeComponent } from './Components/ticket-home/ticket-home.component';
import { CreateTicketComponent } from './Components/create-ticket/create-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketHomeComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
