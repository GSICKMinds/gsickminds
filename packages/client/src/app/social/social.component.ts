import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  @Input() telegram;
  @Input() mail;
  @Input() twitter;
  @Input() linkedin;
  @Input() github;


}
