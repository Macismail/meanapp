import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register.component';
import { NotFoundComponent } from './components/not-found.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component';
import { WebService } from './services/web.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, RegisterComponent, LoginComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [AuthService, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
