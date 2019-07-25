import { Injectable } from '@angular/core';
import {Person} from './person';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  createUserUrl = "http://localhost:8080/signup";

  constructor(private httpclient : HttpClient) { }

  createUser(person : Person): Observable<any>{
    //console.log("------inside service create user----" + person.userRole);
    return this.httpclient.post(this.createUserUrl, person);
    
  }
}
