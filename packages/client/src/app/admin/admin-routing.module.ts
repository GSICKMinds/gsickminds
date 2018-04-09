import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
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

const appRoutes: Routes = [
    {
        path: '', component: AdminComponent, canActivate: [AuthGuard], children: [
            { path: 'info', component: AdminInfoComponent, outlet: 'admin' },
            { path: 'events', component: AdminEventsComponent, outlet: 'admin' },
            { path: 'events/:id', component: AdminTalkComponent, outlet: 'admin' },
            { path: 'team', component: AdminTeamComponent, outlet: 'admin' },
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
})
export class AdminRoutingModule { }
