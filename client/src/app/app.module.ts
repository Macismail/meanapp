import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register.component';
import { NotFoundComponent } from './components/not-found.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServcice } from './services/auth.service';
import { LoginComponent } from './components/login.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, RegisterComponent, LoginComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [AuthServcice],
  bootstrap: [AppComponent]
})
export class AppModule { }
