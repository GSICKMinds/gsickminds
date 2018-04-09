import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from '@services/speakers.service';
import { ITalk } from '@models/models';
import { Speaker } from '@models/classes';

@Component({
  selector: 'gsic-talk-form',
  templateUrl: './talk-form.component.html',
  styleUrls: ['./talk-form.component.scss']
})
export class TalkFormComponent implements OnInit {
  @Input() talk: ITalk;
  talkForm;
  speakers;

  constructor(
    private fb: FormBuilder,
    private speakersService: SpeakersService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.talkForm = this.fb.group(this.talk);
    let speakersArray = await this.speakersService.getAll(this.talk.eventId, this.talk._id);
    this.speakers = speakersArray.map(speaker => new Speaker(speaker));
  }
}
