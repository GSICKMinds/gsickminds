import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  @Input() member;


}
