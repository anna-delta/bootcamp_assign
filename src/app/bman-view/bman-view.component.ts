import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Router } from '@angular/router';
import { DisplayUserDetailsService } from '../display-user-details.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import {Event} from '../event';
import { ApproveService } from '../approve.service';

@Component({
  selector: 'app-bman-view',
  templateUrl: './bman-view.component.html',
  styleUrls: ['./bman-view.component.css'],
  providers : [UserDetailsComponent]
})
export class BmanViewComponent implements OnInit {

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
  
  constructor(private approveEvent : ApproveService,public router : Router,private displayUserDetails : DisplayUserDetailsService , public display :UserDetailsComponent) { }
  ngOnInit() {
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
      
  }
  show(day) : boolean{
    this.desc = [];
    var flag = 0;
    this.events = this.displayUserDetails.events;
    
    
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
    this.basic= true;
    this.selectedDay = day;
    this.personId = this.displayUserDetails.user.id;
  }
  submitEvent(): void{
    this.basic = false;
    this.event.personId = this.personId;
    this.event.eventDay = this.selectedDay;
    this.event.eventStatus = false;
    this.event.eventType = "B";

    this.displayUserDetails.createEvent(this.event).subscribe(data => {this.event = data});
    //this.approveEvent.sendForApproval(this.event);
    
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