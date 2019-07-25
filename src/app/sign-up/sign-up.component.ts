import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Person } from '../person';
import { DisplayUserDetailsService } from '../display-user-details.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserDetailsComponent]
})

export class SignUpComponent implements OnInit {
  
  person : Person = Object.create(null);
  errMessage : string;

  constructor(public router : Router, private loginService : LoginService,private displayUserDetails : DisplayUserDetailsService) { 
  }

  ngOnInit() {}

  onSignIn() : void{
    this.loginService.createUser(this.person).subscribe(data =>{
       this.person= data;
       this.displayUserDetails.user = data;
      this.decideNaviagation();
      });
  }
  decideNaviagation(): void{
    switch(this.displayUserDetails.user.userRole){
      case "admin" :     
        this.displayUserDetails.getEvent(this.displayUserDetails.user.id).subscribe(events => {
          this.displayUserDetails.events = events;
          this.router.navigate(['admin']);
        });
        break;
      case "bman" :
        this.router.navigate(['bMan']);
        break;
      case "viewer":
        this.router.navigate(['display']);
        break;
    }

  }
  onLogIn() : void{
    
    this.displayUserDetails.getUserDetails(this.person.name).subscribe(user => {
      this.displayUserDetails.user = user;
      this.decideNaviagation();
    },error => this.errMessage = <any>error);  
   }

}