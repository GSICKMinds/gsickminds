import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { TalkListPageComponent } from './pages/talk-list-page/talk-list-page.component';

const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent, },
    { path: 'events', component: EventListPageComponent },
    { path: 'events/:id', component: TalkListPageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
