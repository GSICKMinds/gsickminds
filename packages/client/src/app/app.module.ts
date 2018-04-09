import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'angular-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@guards/auth.guard';
import { HeaderInterceptor } from '@interceptors/header.interceptor';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContributionPageComponent } from './pages/contribution-page/contribution-page.component';
import { ImagePageComponent } from './pages/image-page/image-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { InfoService } from '@services/info.service';
import { AuthService } from '@services/auth.service';
import { TeamService } from '@services/team.service';
import { SpeakersService } from '@services/speakers.service';
import { TalksService } from '@services/talks.service';
import { EventService } from '@services/event.service';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { TalkListPageComponent } from './pages/talk-list-page/talk-list-page.component';
import { environment } from 'environments/environment';

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
    NavComponent,
    LoginComponent,
    EventPageComponent,
    MemberPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ContributionPageComponent,
    ImagePageComponent,
    MainPageComponent,
    EventListPageComponent,
    TalkListPageComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    InfoService,
    TeamService,
    AuthService,
    SpeakersService,
    TalksService,
    EventService,
    AuthGuard,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: 'apiUrl', useValue: environment.apiUrl }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
