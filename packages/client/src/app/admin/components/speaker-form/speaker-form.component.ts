import { Component, OnInit, Input } from '@angular/core';
import { ISpeaker } from '@models/models';
import { FormBuilder } from '@angular/forms';
import { SpeakersService } from '@services/speakers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gsic-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {
  @Input() speaker: ISpeaker;
  speakerForm;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private speakerService: SpeakersService) { }

  ngOnInit() {
    this.speakerForm = this.fb.group(this.speaker);
  }

  updateSpeaker() {
    const eventId = this.route.snapshot.paramMap.get('id');
    this.speakerService.update(eventId, this.speaker.talkId, this.speaker._id, this.speakerForm.value);
  }
}
