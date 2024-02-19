import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  private http;
  public countryList:any;
  public selectedCountry:any;

  constructor(private httpClient:HttpClient){

    
    this.http=httpClient;
    
    
  }
 
 
  ngOnInit(): void {
    this.loadCountries();
  }
  loadCountries() {
    let api= "https://restcountries.com/v3.1/all"
    this.http.get(api).subscribe(res =>{
      this.countryList=res
      console.log(res);
      
    });
  }

  setSelectedCountry(country:any){
    this.selectedCountry=country;
    console.log(country);
    
  }

}
