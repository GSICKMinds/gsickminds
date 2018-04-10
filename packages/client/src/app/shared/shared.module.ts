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
import { RouterModule } from '@angular/router';

import { SocialListComponent } from './social-list/social-list.component';
import { SocialItemComponent } from './social-item/social-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionContentComponent } from './section-content/section-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  exports: [
    NgPipesModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MemberListComponent,
    MemberItemComponent,
    TalkListComponent,
    TalkItemComponent,
    SpeakerItemComponent,
    SpeakerListComponent,
    SocialListComponent,
    SectionTitleComponent,
    SocialItemComponent,
    SectionContentComponent,

  ],
  declarations: [
    MemberListComponent,
    MemberItemComponent,
    TalkListComponent,
    TalkItemComponent,
    SpeakerItemComponent,
    SpeakerListComponent,
    SocialListComponent,
    SocialItemComponent,
    SectionTitleComponent,
    SectionContentComponent,


  ]
})
export class SharedModule { }
