import { Component, OnInit, Input } from '@angular/core';
import { ISpeaker } from '@models/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'gsic-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {
  @Input() speaker: ISpeaker;
  speakerForm

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.speakerForm = this.fb.group(this.speaker);
  }

}
