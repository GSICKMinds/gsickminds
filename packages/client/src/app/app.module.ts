import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './shared/event/event.component';


import { NavComponent } from './layout/nav/nav.component';


import { HeaderComponent } from './pages/header/header.component';
import { AppRoutingModule } from './app.routing';

import { SectionComponent } from './shared/section/section.component';
import { AuthService, TeamService, SpeakersService, TalksService, InfoService, EventService } from '@services';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'angular-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@guards';

import { HeaderInterceptor } from '@interceptors';

import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { EventPageComponent } from './pages/event-page/event-page.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContributionPageComponent } from './pages/contribution-page/contribution-page.component';

@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    EventComponent,

    NavComponent,
    HeaderComponent,
    SectionComponent,
    LoginComponent,
    EventPageComponent,
    MemberPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ContributionPageComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    InfoService,
    EventService,
    TeamService,
    AuthService,
    TalksService,
    SpeakersService,
    AuthGuard,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
