import { Injectable } from '@angular/core';
import {Event} from './event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  
  reviewApprovals : Event[] = [];
  businessEvents : Event[] = [];

  getAllEventsUrl = "http://localhost:8080/getAllEvents";
  updateApproveUrl = "http://localhost:8080/approve";

  constructor(private httpClient : HttpClient) { }

  viewEventsForApproval(personId:number) : Observable<Event[]>{
    console.log("view events for approval service#########");
    return this.httpClient.post<Event[]>(this.getAllEventsUrl, personId);
  }

  approve(approveEvent : boolean): Observable<Event> {
      return this.httpClient.post<Event>(this.updateApproveUrl, approveEvent);
  }
}
