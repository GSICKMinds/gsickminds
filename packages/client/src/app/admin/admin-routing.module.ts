import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guards';

const appRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
            { path: 'info', component: AdminInfoComponent, outlet: 'admin' },
            { path: 'events', component: AdminEventsComponent, outlet: 'admin' },
            { path: 'events/:id', component: AdminTalkComponent, outlet: 'admin' },
            { path: 'team', component: AdminTeamComponent, outlet: 'admin' },
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
})
export class AppRoutingModule { }
