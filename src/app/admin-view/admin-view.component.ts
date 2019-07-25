import { Component, OnInit, Inject, SystemJsNgModuleLoader } from '@angular/core';
import { DisplayUserDetailsService } from '../display-user-details.service';
import { Person } from '../person';
import { UserDetailsComponent } from '../user-details/user-details.component';
import {Event} from '../event';
import { Router } from '@angular/router';
import { ApproveService } from '../approve.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  providers : [UserDetailsComponent]
})
export class AdminViewComponent implements OnInit {

  months : string[] = ["January", "February", "March", "April", "May","June", "July", "August", "Semptember", "October", "November", "December"];
  user : Person;
  noDays : number;
  selectedMonth : string;
  displayModal : boolean = false;
  selectedDay : number;
  basic = false;
  event : Event = Object.create(null);
  personId : number;
  events : Event[];
  desc : any[] = [];
  displayDetails : boolean = false;
  eventDetail : Event;
  businessEvents : Event[] = [];
  bEvent : boolean = false;
 

  constructor(private approveEvent: ApproveService,public router : Router,private displayUserDetails : DisplayUserDetailsService , public display :UserDetailsComponent) { }

  ngOnInit() {
    this.user = this.displayUserDetails.user;
  }

  approve(): void{
    this.bEvent = false;
    this.approveEvent.approve(true);
  }

  reject(): void {
    this.bEvent = false;
    this.approveEvent.approve(false);
  }
  
  viewApprovals() : void{ 
    this.bEvent = true;
    this.basic = false;
      this.approveEvent.viewEventsForApproval(this.displayUserDetails.user.id).subscribe(allEvents =>{
        this.approveEvent.reviewApprovals = allEvents;
        this.filterBEvents();
      });     
  }

  filterBEvents() : void{
    var i = 0;
    for(var e in this.approveEvent.reviewApprovals){
        if(this.approveEvent.reviewApprovals[e].eventType === "B"){
            this.businessEvents[i] = this.approveEvent.reviewApprovals[e];
            i = i + 1;
        }
    
         }
         this.approveEvent.businessEvents = this.businessEvents;
         console.log("--b evens---" +JSON.stringify(this.businessEvents));
  }

  showEventDetails(d): void{
    
    this.displayDetails = true;
   console.log("----event details-----" + d);
      for(var e in this.events){
        if(d===(this.events[e].eventName)){
            this.eventDetail = this.events[e];      
            break;
        }
      }
      console.log("---found the event---" + JSON.stringify(event));
  }

  show(day) : boolean{
    this.desc = [];
    var flag = 0;
    this.events = this.displayUserDetails.events;
    console.log('-----inside event------' + JSON.stringify(this.events));
    
    for(var e in this.events){   
      if(day == this.events[e].eventDay){
        this.desc.push(this.events[e].eventName)
        flag = 1  
      } 
    }
    if(flag == 0){
      return false;
    }
    else{
      return true;
    }
  }

  createEvent(day : any):void { 
    //console.log("------selected day--------" + this.selectedMonth); 
    this.basic= true;
    this.bEvent = false;
    this.selectedDay = day;
    this.personId = this.displayUserDetails.user.id;
  }

  submitEvent(): void{  
    this.basic = false;
    this.event.personId = this.personId;
    this.event.eventDay = this.selectedDay;
    this.event.eventStatus = true;
    this.event.eventType = "nB";

    this.displayUserDetails.createEvent(this.event).subscribe(data => {this.event = data});
  }

  displayMonth():void{
    switch(this.selectedMonth){
      case "January": 
      case "March":
      case "May":
      case "July":
      case "August":
      case "October":
      case "December":
        this.noDays = 31;
        break;
      case "February":
        this.noDays = 28;
        break;
      case  "April":
      case "June":
      case "Semptember":
      case "November":
        this.noDays = 30;    
    }  
 }
}