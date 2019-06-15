import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  countries=['India','China','Usa'];
  countryhaserror=false;
  constructor(private Service:UserService,private router:Router) { }
  validatecountry(country) {
    if(country=="default"){
      this.countryhaserror=true;
    }
    else {
      this.countryhaserror=false;
    }
  }
  insertUser(user) {
    console.log("inside insert user");
    console.log(user);
    this.Service.addUser(user).subscribe(data=> {
      console.log("successfully inserted");
    },
    err=> {
      console.log("error messange");
    });
  }

  ngOnInit() {
    if(!this.Service.authenticated) {
      this.router.navigate(['/login']);
    }
  }

}
