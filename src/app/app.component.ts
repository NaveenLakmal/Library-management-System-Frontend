import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import {RegisterFormComponent} from './page/student-register/register-form.component'
import { LoginComponent } from "./page/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, ViewAllBooksComponent, RegisterFormComponent, LoginComponent]
})
export class AppComponent {
  title = 'library-manage-frontend';
}
