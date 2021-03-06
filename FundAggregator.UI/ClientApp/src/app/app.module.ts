import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule, NgbNavModule, NgbPaginationModule, NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PlatformAccountConfigurationComponent } from './platform-account-configuration/platform-account-configuration.component';
import { InvestmentsComponent } from './investments/investments.component';
import { initApp } from './config';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    PlatformAccountConfigurationComponent,
    InvestmentsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // canActivate: [AuthGuard]
      // { path: 'profile', component: ProfileComponent },
      { path: 'platform-account-configuration', component: PlatformAccountConfigurationComponent },
      { path: 'investments', component: InvestmentsComponent },
    ]),
    NgbCollapseModule,
    NgbNavModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModalModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }