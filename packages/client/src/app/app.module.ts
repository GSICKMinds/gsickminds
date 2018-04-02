import { NgbModule, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { VenueComponent } from './pages/venue/venue.component';
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
import { AdminComponent } from './admin/admin.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { InfoService } from './info.service';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { TeamService } from './team.service';
import { NgPipesModule } from 'angular-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTeamFormComponent } from './admin-team-form/admin-team-form.component';
import { AdminTalkComponent } from './admin-talk/admin-talk.component';
import { TalksService } from './talks.service';
import { SpeakersService } from './speakers.service';
import { AdminTalkFormComponent } from './admin-talk-form/admin-talk-form.component';
import { AdminSpeakerFormComponent } from './admin-speaker-form/admin-speaker-form.component';

import { AdminSpeakerDialogComponent } from './admin-speaker-dialog/admin-speaker-dialog.component';
import { AdminEventDialogComponent } from './admin-event-dialog/admin-event-dialog.component';
import { AdminTalkDialogComponent } from './admin-talk-dialog/admin-talk-dialog.component';
import { SocialComponent } from './social/social.component';

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
    AdminComponent,
    AdminInfoComponent,
    AdminTeamComponent,
    AdminEventsComponent,
    AdminTeamFormComponent,
    AdminTalkComponent,
    AdminTalkFormComponent,
    AdminSpeakerFormComponent,

    AdminSpeakerDialogComponent,
    AdminEventDialogComponent,
    AdminTalkDialogComponent,
    SocialComponent,

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
    TalksService,
    SpeakersService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ],
  entryComponents: [
    AdminEventDialogComponent,
    AdminTalkDialogComponent,
    AdminSpeakerDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
