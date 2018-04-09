import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @Input() members;

  constructor() { }

  ngOnInit() {
  }

}
