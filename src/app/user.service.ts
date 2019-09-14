import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/profile";
  authUrl="http://localhost:3000";
  authenticated=false;

  constructor(private http:HttpClient) { }


  addUser(user) {
   return this.http.post(this.url,user,{
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  });//this.users.push(user); //we use subscribe to open the data sent by the database
  }
  updateUser(user) {
    return this.http.put(this.url+'/'+user._id,user);
  }
  register(user) {
    return this.http.post(this.authUrl+'/register',user);
  }
  login(user){
    return this.http.post(this.authUrl+'/login',user,{
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  getAllUsers() {
    return this.http.get(this.url,{
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }); //this.users;
  }
  logout() {
    return this.http.get(this.authUrl+'/logout',{
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  deleteUser(user) {
    return this.http.delete(this.url+'/'+user._id);
  }
}

