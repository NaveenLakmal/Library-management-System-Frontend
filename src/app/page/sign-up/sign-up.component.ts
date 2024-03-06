import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  private http;
  public countryList: any;
  public selectedCountry: any;
  private isExistsUser: any;
  public selectedCountryCode:any;

  public userObj = {
    nic: null,
    name: null,
    country: null,
    contactNumber: null,
    address: null,
    email: null,
    username: null,
    password: null

  }

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }


  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    let api = "https://restcountries.com/v3.1/all"
    this.http.get(api).subscribe(res => {
      this.countryList = res
      console.log(res);

    });
  }

  setSelectedCountry(country: any) {
    this.selectedCountry = country;
    this.selectedCountryCode=country.idd.root+""+country.idd.suffixes[0];
    //console.log(this.selectedCountryCode);
    
    //console.log(this.selectedCountry+"hello country");

  }

  submitForm() {
    //console.log(this.userObj);
    this.http.get(`http://localhost:8081/user/is-exist-user/${this.userObj.username}`).subscribe(data => {
      // console.log(data);
      this.isExistsUser = data;
      this.registerUser(this.isExistsUser);


    })

  }

  registerUser(isExistsUser: any) {
    if (isExistsUser != true) {
      this.http.post("http://localhost:8081/user/add", this.userObj).subscribe(data => {
        Swal.fire({
          title: "success",
          text: `${this.userObj.name}  has been registed `,
          icon: "success"
        })


      })
    } else {
      Swal.fire({
        title: "Can't register user",
        text: `${this.userObj.name} has already has been registed `,
        icon: "error"
      })
    }

    console.log(isExistsUser);

  }

}
