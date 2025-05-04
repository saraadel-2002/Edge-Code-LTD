import { NavLayoutComponent } from './Components/nav-layout/nav-layout.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { JoinOurTeamComponent } from './Components/join-our-team/join-our-team.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlowingLineComponent } from './Shared/glowing-line/glowing-line.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    JoinOurTeamComponent,
    ContactUsComponent,
    NavbarComponent,
    NavLayoutComponent,
    GlowingLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
