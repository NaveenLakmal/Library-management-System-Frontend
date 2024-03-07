import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
    selector: 'app-view-all-users',
    standalone: true,
    templateUrl: './view-all-users.component.html',
    styleUrl: './view-all-users.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, RouterLink, NavComponent]
})
export class ViewAllUsersComponent implements OnInit{
  private http;
  public userList:any =[];
  public selectedUser:any;
  private baseUrl:String = "http://localhost:8081";

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.http.get(this.baseUrl +"/user/get").subscribe((data:any) =>{
      if (Array.isArray(data)) {
        this.userList = data;
      } else {
        console.error('Expected an array of books, but received:', data);
      }
    });
  }

  setSelectedUser(user:any){
    this.selectedUser=user;
  }

  deleteUser(){
   
    
    let api = this.baseUrl+"/user/" + this.selectedUser.bid;
    //console.log(this.selectedUser.bid);
    
    this.http.delete(api,{ responseType: 'text' }).subscribe((responce: string) => {
      console.log(responce);
      this.loadUser();
      console.log("hello Delete method");
      

      Swal.fire({
        title: "Deleted!",
        text: `${this.selectedUser.title} Book is deleted`,
        icon: "success"
      });
      this.selectedUser = null;
    });
  }

  saveUser(){
    let postApi = this.baseUrl+"/user/add";
    this.http.post(postApi,this.selectedUser).subscribe(data =>{
      this.loadUser();
      Swal.fire({
        title: "updated!",
        text: `${this.selectedUser.title} Book is updated`,
        icon: "success"
      });
      this.selectedUser = [];
    });
  }

}
