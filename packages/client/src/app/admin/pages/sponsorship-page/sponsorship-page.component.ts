import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISponsor } from '@models/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SponsorsService } from '@services/sponsors.service';
import { SponsorDialogComponent } from '../../dialogs/sponsor-dialog/sponsor-dialog.component';

@Component({
  selector: 'gsic-sponsorship-page',
  templateUrl: './sponsorship-page.component.html',
  styleUrls: ['./sponsorship-page.component.scss']
})
export class SponsorshipPageComponent implements OnInit {
  sponsors: ISponsor[] = [];

  constructor(private route: ActivatedRoute, private sponsorsService: SponsorsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getSponsors();
  }

  async getSponsors() {
    const eventId = this.route.snapshot.paramMap.get('id');
    this.sponsors = await this.sponsorsService.getAll(eventId);
  }

  async addSponsor() {
    const modalRef = this.modalService.open(SponsorDialogComponent);
    try {
      const result = await modalRef.result;
      const eventId = this.route.snapshot.paramMap.get('id');
      delete result._id;
      await this.sponsorsService.create(eventId, result);
      this.getSponsors();
    } catch (e) { }
  }

  async deleteSponsor(sponsorId) {
    const eventId = this.route.snapshot.paramMap.get('id');
    await this.sponsorsService.delete(eventId, sponsorId);
    this.getSponsors();
  }

}
