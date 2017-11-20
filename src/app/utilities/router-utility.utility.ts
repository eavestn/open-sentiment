import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { LandingPageComponent }         from '../landing-page/landing-page.component';
import { ParticipantSignUpComponent }   from '../participant-sign-up/participant-sign-up.component';
import { DocumentationPageComponent } 	from '../documentation-page/documentation-page.component';

const appRoutes = [
    { path: 'home', component: LandingPageComponent },
	{ path: 'participant-sign-up', component: ParticipantSignUpComponent },
	{ path: 'documentation', component: DocumentationPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class RouterUtility { }