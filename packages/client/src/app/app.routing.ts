import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { AdminComponent } from './admin/admin.component';

import { EventComponent } from './shared/event/event.component';
import { AuthGuard } from '@guards';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
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
