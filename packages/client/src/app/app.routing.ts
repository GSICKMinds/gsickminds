import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EventComponent } from './shared/event/event.component';
import { AuthGuard } from '@guards';
import { LoginComponent } from './login/login.component';
import { TalkListComponent } from './shared/talk-list/talk-list.component';
import { EventListComponent } from './shared/event-list/event-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent, },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: TalkListComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
