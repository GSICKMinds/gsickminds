import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgPipesModule } from 'angular-pipes';
import { MemberItemComponent } from './member-item/member-item.component';
import { MemberListComponent } from './member-list/member-list.component';
import { SpeakerItemComponent } from './speaker-item/speaker-item.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { TalkItemComponent } from './talk-item/talk-item.component';
import { TalkListComponent } from './talk-list/talk-list.component';

import localeEs from '@angular/common/locales/es'; // to register french
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessageComponent } from './message/message.component';
import { SectionContentComponent } from './section-content/section-content.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SocialItemComponent } from './social-item/social-item.component';
import { SocialListComponent } from './social-list/social-list.component';

import { SafeHtmlPipe } from '../common/pipes/safe-html.pipe';
import { GenericFormComponent } from './generic-form/generic-form.component';

registerLocaleData(localeEs);

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
    ConfirmDialogComponent,
    MessageComponent,
    SafeHtmlPipe,
    GenericFormComponent
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
    ConfirmDialogComponent,
    MessageComponent,
    SafeHtmlPipe,
    GenericFormComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class SharedModule { }
