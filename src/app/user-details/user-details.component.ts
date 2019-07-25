import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Person } from '../person';
import { DisplayUserDetailsService } from '../display-user-details.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user : Person;
  months : string[] = ["January", "February", "March", "April", "May","June", "July", "August", "Semptember", "October", "November", "December"];
  selectedMonth : string;
  noDays : number;


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


  constructor(private displayUserDetails : DisplayUserDetailsService, @Inject(DOCUMENT) document) {
    
   }

  ngOnInit() {
    this.user = this.displayUserDetails.user; 
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