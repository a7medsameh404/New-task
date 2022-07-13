import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AllnewsComponent } from './allnews/allnews.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { StartGuard } from './start.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard], component:HomeComponent},
  {path:'register',canActivate:[StartGuard],component:RegisterComponent},
  {path:'login',canActivate:[StartGuard],component:LoginComponent},
  {path:'allnews',component:AllnewsComponent},
  {path:'newsdetails',component:NewsdetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

