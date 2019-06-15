import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viiew',
  templateUrl: './viiew.component.html',
  styleUrls: ['./viiew.component.css']
})
export class ViiewComponent implements OnInit {

  constructor(private router: Router, private Service:UserService) { }
  profiles:any=[];
  showView;
  updateView;
  countries=['India','China','Usa'];
  countryhaserror=false;
  updateProfile;
  msg;
  ngOnInit() {
    if(!this.Service.authenticated) {
      this.router.navigate(['/login']);
    }
      else
      {
    console.log("loading data");
    this.showView=true;
    this.updateView=false;
    this.Service.getAllUsers().subscribe(
      data=> {
        console.log(data);
        this.profiles=data;
      },
      err=> {
        console.log("error");
        this.msg = "You are not authorized used contact admin"
      }); //this.profiles=this.Service.getAllUsers();
    console.log(this.profiles);
  }
}
  deleteUser(profile) {
    console.log("Inside delete");
    console.log(profile);
    this.Service.deleteUser(profile).subscribe(
      data=> {
        let pos=this.profiles.indexOf(profile);
        console.log(pos);
        this.profiles.splice(pos,1);
        console.log("prof deleted");
      },
      err=> {
        console.log("Error deleting profile");
      });
  }
  updateUserForm(profile) {
    console.log("Inside update");
    console.log(profile);
    this.showView=false;
    this.updateView=true;
    this.updateProfile=profile;
    console.log(this.updateProfile);
  }
  validatecountry(country) {
    if(country=="default"){
      this.countryhaserror=true;
    }
    else {
      this.countryhaserror=false;
    }
  }
  updateProfileUser() {
      this.Service.updateUser(this.updateProfile).subscribe(
        data=> {
          let pos=this.profiles.indexOf(this.updateProfile);
          this.profiles.splice(pos,1,this.updateProfile);
          console.log("profile updated");
          this.showView=true;
          this.updateView=false;
        },
        err=> {
          console.log("Error updating profile");
        });
  }
  logout() {
    this.Service.logout().subscribe(
      data=> {
        console.log("Logout successful");
        this.Service.authenticated=false;
        this.router.navigate(['/login']);
      },
      err=> {
        console.log("Error logging out");
      }
    );
  }
}
