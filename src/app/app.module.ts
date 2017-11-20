import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } 	from '@angular/common/http';


import { AppComponent } from './app.component';
import { DocumentationPageComponent } 	from './documentation-page/documentation-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ParticipantSignUpComponent } from './participant-sign-up/participant-sign-up.component';
import { RouterUtility } from './utilities/router-utility.utility';


@NgModule({
  declarations: [
	AppComponent,
	DocumentationPageComponent,
    LandingPageComponent, 
    ParticipantSignUpComponent,
    NavigationBarComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
    RouterUtility
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
