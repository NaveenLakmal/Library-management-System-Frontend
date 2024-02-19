import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterFormComponent } from './page/student-register/register-form.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

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
    }
];
