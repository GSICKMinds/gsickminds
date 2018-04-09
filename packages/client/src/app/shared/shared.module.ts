import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'angular-pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { TalkListComponent } from './talk-list/talk-list.component';
import { TalkItemComponent } from './talk-item/talk-item.component';
import { SpeakerItemComponent } from './speaker-item/speaker-item.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule } from '@angular/router';

import { SocialListComponent } from './social-list/social-list.component';
import { SocialItemComponent } from './social-item/social-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionContentComponent } from './section-content/section-content.component';


@NgModule({
  imports: [
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    NgPipesModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MemberListComponent,
    MemberItemComponent,
    TalkListComponent,
    TalkItemComponent,
    SpeakerItemComponent,
    SpeakerListComponent,
    EventListComponent,
    SocialListComponent,
    SectionTitleComponent,
    SocialItemComponent,
    SectionContentComponent
  ],
  declarations: [
    MemberListComponent,
    MemberItemComponent,
    TalkListComponent,
    TalkItemComponent,
    SpeakerItemComponent,
    SpeakerListComponent,
    EventListComponent,
    SocialListComponent,
    SocialItemComponent,
    SectionTitleComponent,
    SectionContentComponent,
  ]
})
export class SharedModule { }
