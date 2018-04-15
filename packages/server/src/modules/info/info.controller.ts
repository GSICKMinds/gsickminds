import { Get, Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InfoService } from './info.service';
import { IInfo } from 'models';

@Controller()
export class InfoController {
  constructor(private readonly infoService: InfoService) { }

  @Get('/info')
  async getInfo() {
    return await this.infoService.getInfo();
  }

  @Put('/info')
  async updateInfo(@Body() info: IInfo) {
    return await this.infoService.updateInfo(info);
  }

  @Get('/contribution')
  async getContribution() {
    return await this.infoService.getContribution();
  }

  @Put('/contribution')
  async updateContribution(@Body() contribution) {
    return await this.infoService.updateContribution(contribution);
  }

  @Get('/info/sponsors')
  async getSponsors() {
    return await this.infoService.getSponsors();
  }

  @Put('/info/sponsors')
  async updateSponsors(@Body() sponsors) {
    return await this.infoService.updateSponsors(sponsors);
  }

  @Get('/venue')
  async getVenue() {
    return await this.infoService.getVenue();
  }

  @Put('/venue')
  async updateVenue(@Body() venue) {
    return await this.infoService.updateVenue(venue);
  }
}
