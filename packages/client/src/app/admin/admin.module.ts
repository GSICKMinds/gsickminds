import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminTeamFormComponent } from './admin-team-form/admin-team-form.component';
import { AdminTalkComponent } from './admin-talk/admin-talk.component';
import { AdminTalkFormComponent } from './admin-talk-form/admin-talk-form.component';
import { AdminSpeakerFormComponent } from './admin-speaker-form/admin-speaker-form.component';
import { AdminSpeakerDialogComponent } from './admin-speaker-dialog/admin-speaker-dialog.component';
import { AdminEventDialogComponent } from './admin-event-dialog/admin-event-dialog.component';
import { AdminTalkDialogComponent } from './admin-talk-dialog/admin-talk-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
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
  ],
  entryComponents: [
    AdminEventDialogComponent,
    AdminTalkDialogComponent,
    AdminSpeakerDialogComponent
  ],
})
export class AdminModule { }
