import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private Service:UserService) { }
  msg;
  ngOnInit() {
  }
  loginUser(user) {
    this.Service.login(user).subscribe(
      data=> {
        console.log(data);
        this.Service.authenticated=true;
        console.log("login successful");
        this.router.navigate(['/viiew']);
      },
      err=> {
        console.log("Error logging in");
        this.msg="Invalid credentials"
      }
    );

  }
  gotoregister() {
    this.router.navigate(['/register']);
  }
}
