import { Component, OnInit } from '@angular/core';
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

  constructor(private sponsorsService: SponsorsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getSponsors();
  }

  async getSponsors() {
    this.sponsors = await this.sponsorsService.getAll('true');
  }

  async addSponsor() {
    const modalRef = this.modalService.open(SponsorDialogComponent);
    try {
      const result = await modalRef.result;
      delete result._id;
      await this.sponsorsService.create(result);
      this.getSponsors();
    } catch (e) { }
  }

  async deleteSponsor(sponsorId) {
    await this.sponsorsService.delete(sponsorId);
    this.getSponsors();
  }

}
