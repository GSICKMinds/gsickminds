import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { EventComponent } from './shared/event/event.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MemberComponent } from './shared/member/member.component';
import { NavComponent } from './layout/nav/nav.component';
import { SponsorComponent } from './shared/sponsor/sponsor.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { EventsComponent } from './pages/events/events.component';
import { ContributionComponent } from './pages/contribution/contribution.component';
import { TitleComponent } from './shared/title/title.component';
import { HeaderComponent } from './pages/header/header.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { EventListComponent } from './pages/event-list/event-list.component';
import { SectionComponent } from './shared/section/section.component';
import { AuthService, TeamService, SpeakersService, TalksService, InfoService, EventService } from '@services';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'angular-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@guards';
import { HeaderInterceptor } from '@interceptors';
import { VenueComponent } from './pages/venue/venue.component';

@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    VenueComponent,
    EventComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    MemberComponent,
    NavComponent,
    SponsorComponent,
    SponsorsComponent,
    EventsComponent,
    ContributionComponent,
    TitleComponent,
    HeaderComponent,
    EventListComponent,
    SectionComponent,

    SocialComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgPipesModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    InfoService,
    EventService,
    TeamService,
    AuthService,
    TalksService,
    SpeakersService,
    AuthGuard,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
