import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './shared/event/event.component';
import { AuthGuard } from '@guards';
import { LoginComponent } from './login/login.component';
import { TalkListComponent } from './shared/talk-list/talk-list.component';
import { EventListComponent } from './shared/event-list/event-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
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
