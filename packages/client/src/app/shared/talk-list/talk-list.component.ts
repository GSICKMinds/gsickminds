import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@services/event.service';

@Component({
  selector: 'gsic-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent {
  @Input() talks;

}
