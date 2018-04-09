import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ISpeaker } from '@models';
import { SpeakersService } from '@services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gsic-admin-speaker-form',
  templateUrl: './admin-speaker-form.component.html',
  styleUrls: ['./admin-speaker-form.component.scss']
})
export class AdminSpeakerFormComponent implements OnInit {
  @Input() speaker;
  speakerData;
  speakerForm;
  buttonLabel = 'Actualizar';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private speakersService: SpeakersService) { }

  ngOnInit() {
    this.speakerData = new Speaker(this.speaker);
    this.speakerForm = this.fb.group(this.speakerData);
  }

  onSubmit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    this.speakersService.update(eventId, this.speaker.talkId, this.speaker._id, this.speakerForm.value);
  }

}

class Speaker implements ISpeaker {
  name: string;
  position: string;
  photo: string;
  bio: string;
  talkId: string;
  twitter: string;
  linkedin: string;
  github: string;

  constructor(speaker) {
    this.name = speaker.name || '';
    this.position = speaker.position || '';
    this.photo = speaker.photo || '';
    this.bio = speaker.bio || '';
    this.talkId = speaker.talkId || '';
    this.twitter = speaker.twitter || '';
    this.linkedin = speaker.linkedin || '';
    this.github = speaker.github || '';
  }
}
