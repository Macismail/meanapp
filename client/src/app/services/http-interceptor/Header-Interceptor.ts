import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

export class HeaderInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    return next.handle(request)
  }
}