
import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{

  private http;
  public countryList:any;

  constructor( http:HttpClient){
    this.http=http;
    console.log("hello");
    
  }
 
 
  ngOnInit(): void {
    this.loadCountries();
  }
  loadCountries() {
    let api= "https://restcountries.com/v3.1/all"
    this.http.get(api).subscribe(res =>{
      console.log(res);
      
    });
  }

}
