import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class DisplayUserDetailsService {

  user : Person;
  events : Event[];

  getUserDetailsUrl = "http://localhost:8080/userdetails";
  createEventUrl = "http://localhost:8080/user/createevent"
  getEventUrl = "http://localhost:8080/user/getevent";

  constructor(private httpClient : HttpClient) { }
 
  getUserDetails(personName : string) : Observable<Person> {
      return this.httpClient.post<Person>(this.getUserDetailsUrl, personName);
  }
  createEvent(event : Event) : Observable<any>{
    return this.httpClient.post(this.createEventUrl, event);
  }

  getEvent(personId : number) : Observable<Event[]>{
    return this.httpClient.post<Event[]>(this.getEventUrl, personId);
  }
}
