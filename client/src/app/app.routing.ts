import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminTalkComponent } from './admin-talk/admin-talk.component';
import { EventComponent } from './shared/event/event.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'info', component: AdminInfoComponent, outlet: 'admin' },
            { path: 'events', component: AdminEventsComponent, outlet: 'admin' },
            { path: 'events/:id', component: AdminTalkComponent, outlet: 'admin' },
            { path: 'team', component: AdminTeamComponent, outlet: 'admin' },
        ]
    },

    {
        path: 'events', component: EventListComponent, children: [
            { path: ':id', component: EventComponent }
        ]
    },

    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
})
export class AppRoutingModule { }
