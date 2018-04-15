import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgPipesModule } from 'angular-pipes';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';

import { AuthGuard } from '@guards/auth.guard';
import { CatchInterceptor } from '@interceptors/catch.interceptor';
import { HeaderInterceptor } from '@interceptors/header.interceptor';
import { AuthService } from '@services/auth.service';
import { EventService } from '@services/event.service';
import { InfoService } from '@services/info.service';
import { MessageService } from '@services/message.service';
import { SpeakersService } from '@services/speakers.service';
import { TalksService } from '@services/talks.service';
import { TeamService } from '@services/team.service';
import { environment } from 'environments/environment';
import { AdminModule } from './admin/admin.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContributionPageComponent } from './pages/contribution-page/contribution-page.component';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { ImagePageComponent } from './pages/image-page/image-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';
import { SponsorPageComponent } from './pages/sponsor-page/sponsor-page.component';
import { SponsorshipPageComponent } from './pages/sponsorship-page/sponsorship-page.component';
import { TalkListPageComponent } from './pages/talk-list-page/talk-list-page.component';
import { VenuePageComponent } from './pages/venue-page/venue-page.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    EventPageComponent,
    MemberPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ContributionPageComponent,
    ImagePageComponent,
    MainPageComponent,
    EventListPageComponent,
    TalkListPageComponent,
    LoginPageComponent,
    SponsorPageComponent,
    VenuePageComponent,
    SponsorshipPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SharedModule,

  ],
  providers: [
    InfoService,
    TeamService,
    AuthService,
    SpeakersService,
    TalksService,
    EventService,
    AuthGuard,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CatchInterceptor, multi: true },
    { provide: 'apiUrl', useValue: environment.apiUrl }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
