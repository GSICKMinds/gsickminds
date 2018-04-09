import { Component, OnInit } from '@angular/core';
import { TalksService } from '@services/talks.service';
import { ActivatedRoute } from '@angular/router';
import { Talk } from '@models/classes';

@Component({
  selector: 'gsic-talks-page',
  templateUrl: './talks-page.component.html',
  styleUrls: ['./talks-page.component.scss']
})
export class TalksPageComponent implements OnInit {
  talks;

  constructor(private route: ActivatedRoute, private talksService: TalksService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let talksArray = await this.talksService.getAll(id);
    this.talks = talksArray.map(talk => new Talk(talk));
  }
}
