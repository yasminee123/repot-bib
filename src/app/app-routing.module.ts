import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/private/books/books.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { UsersComponent } from './components/private/users/users.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
