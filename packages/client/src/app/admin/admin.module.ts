import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { TalksPageComponent } from './pages/talks-page/talks-page.component';
import { TalkFormComponent } from './components/talk-form/talk-form.component';
import { SpeakerFormComponent } from './components/speaker-form/speaker-form.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { TalkDialogComponent } from './dialogs/talk-dialog/talk-dialog.component';
import { EventDialogComponent } from './dialogs/event-dialog/event-dialog.component';
import { SpeakerDialogComponent } from './dialogs/speaker-dialog/speaker-dialog.component';
import { MemberDialogComponent } from './dialogs/member-dialog/member-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminPageComponent, EventsPageComponent, MembersPageComponent, InfoPageComponent, SidenavComponent, TalksPageComponent, TalkFormComponent, SpeakerFormComponent, EventFormComponent, MemberFormComponent, InfoFormComponent, TalkDialogComponent, EventDialogComponent, SpeakerDialogComponent, MemberDialogComponent],
  entryComponents: [TalkDialogComponent, EventDialogComponent, SpeakerDialogComponent, MemberDialogComponent]
})
export class AdminModule { }
