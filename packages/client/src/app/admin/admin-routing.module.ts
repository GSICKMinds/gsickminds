import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { TalksPageComponent } from './pages/talks-page/talks-page.component';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [
  {
    path: 'panel', component: AdminPageComponent, canActivate: [AuthGuard], children: [
      { path: 'events', component: EventsPageComponent, outlet: 'admin' },
      { path: 'events/:id', component: TalksPageComponent, outlet: 'admin' },
      { path: 'members', component: MembersPageComponent, outlet: 'admin' },
      { path: 'info', component: InfoPageComponent, outlet: 'admin' }
    ]
  },
  { path: '**', redirectTo: 'panel' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
