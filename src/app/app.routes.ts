import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterFormComponent } from './page/student-register/register-form.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ViewAllUsersComponent } from './page/view-all-users/view-all-users.component';

export const routes: Routes = [
    
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"allBook",
        component:ViewAllBooksComponent
    },
    {
        path:"signUp",
        component:SignUpComponent
    },
    {
        path:"allUser",
        component:ViewAllUsersComponent
    },
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    }
];
