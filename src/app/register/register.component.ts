import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Service:UserService,private router:Router) { }

  ngOnInit() {
  }

  roles = ['user','admin'];

  registerUser(user) {
    console.log(user);
    this.Service.register(user).subscribe(
      data=> {
        console.log(data);
        console.log("Registered successfully");
        this.router.navigate(['/login']);
      },
      err=> {
        console.log(err);
        console.log("error registering user");
      }
    );
  }
}
