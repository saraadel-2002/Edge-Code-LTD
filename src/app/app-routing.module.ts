import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { JoinOurTeamComponent } from './Components/join-our-team/join-our-team.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NavLayoutComponent } from './Components/nav-layout/nav-layout.component';


const routes: Routes = [
  {path:'',component:NavLayoutComponent , 
    children:[
      {path:'home' , redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'joinourteam',component:JoinOurTeamComponent},
      {path:'contactus',component:ContactUsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
