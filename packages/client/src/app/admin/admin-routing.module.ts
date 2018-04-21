import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContributionPageComponent } from './pages/contribution-page/contribution-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { SponsorsPageComponent } from './pages/sponsors-page/sponsors-page.component';
import { SponsorshipPageComponent } from './pages/sponsorship-page/sponsorship-page.component';
import { TalksPageComponent } from './pages/talks-page/talks-page.component';
import { VenuePageComponent } from './pages/venue-page/venue-page.component';

const routes: Routes = [
  {
    path: 'panel', component: AdminPageComponent, canActivate: [AuthGuard], children: [
      { path: 'events', component: EventsPageComponent, outlet: 'admin' },
      { path: 'events/:id', component: EventPageComponent, outlet: 'admin' },
      { path: 'members', component: MembersPageComponent, outlet: 'admin' },
      { path: 'info', component: InfoPageComponent, outlet: 'admin' },
      { path: 'contribution', component: ContributionPageComponent, outlet: 'admin' },
      { path: 'sponsors', component: SponsorsPageComponent, outlet: 'admin' },
      { path: 'venue', component: VenuePageComponent, outlet: 'admin' }
    ]
  },
  { path: '**', redirectTo: 'panel' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
