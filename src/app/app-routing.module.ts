import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
