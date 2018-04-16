import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { ContributionFormComponent } from './components/contribution-form/contribution-form.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { SpeakerFormComponent } from './components/speaker-form/speaker-form.component';
import { SponsorFormComponent } from './components/sponsor-form/sponsor-form.component';
import { TalkFormComponent } from './components/talk-form/talk-form.component';
import { VenueFormComponent } from './components/venue-form/venue-form.component';
import { EventDialogComponent } from './dialogs/event-dialog/event-dialog.component';
import { MemberDialogComponent } from './dialogs/member-dialog/member-dialog.component';
import { SpeakerDialogComponent } from './dialogs/speaker-dialog/speaker-dialog.component';
import { SponsorDialogComponent } from './dialogs/sponsor-dialog/sponsor-dialog.component';
import { TalkDialogComponent } from './dialogs/talk-dialog/talk-dialog.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContributionPageComponent } from './pages/contribution-page/contribution-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { SponsorsPageComponent } from './pages/sponsors-page/sponsors-page.component';
import { SponsorshipPageComponent } from './pages/sponsorship-page/sponsorship-page.component';
import { TalksPageComponent } from './pages/talks-page/talks-page.component';
import { VenuePageComponent } from './pages/venue-page/venue-page.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminPageComponent,
    EventsPageComponent,
    MembersPageComponent,
    InfoPageComponent,
    SidenavComponent,
    TalksPageComponent,
    TalkFormComponent,
    SpeakerFormComponent,
    MemberFormComponent,
    InfoFormComponent,
    TalkDialogComponent,
    EventDialogComponent,
    SpeakerDialogComponent,
    MemberDialogComponent,
    VenuePageComponent,
    SponsorsPageComponent,
    ContributionPageComponent,
    VenueFormComponent,
    SponsorFormComponent,
    ContributionFormComponent,
    SponsorshipPageComponent,
    SponsorDialogComponent
  ],
  entryComponents: [
    TalkDialogComponent,
    EventDialogComponent,
    SpeakerDialogComponent,
    MemberDialogComponent,
    SponsorDialogComponent
  ]
})
export class AdminModule { }
