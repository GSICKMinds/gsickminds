import { Get, Controller, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { IInfo, ISponsor } from 'models';
import { SponsorsService } from './sponsors.service';

@Controller('events')
export class SponsorsController {
  constructor(private readonly sponsorsService: SponsorsService) { }
  @Get(':eventId/sponsors')
  async getAll(@Param('eventId') eventId: string) {
    return this.sponsorsService.getAll(eventId);
  }

  @Post(':eventId/sponsors')
  async create(@Param('eventId') eventId: string, @Body() sponsor: ISponsor) {
    return this.sponsorsService.create(eventId, sponsor);
  }

  @Put(':eventId/sponsors/:sponsorId')
  async update(@Param('eventId') eventId: string, @Param('sponsorId') sponsorId: string, @Body() sponsor: ISponsor) {
    return await this.sponsorsService.update(sponsorId, sponsor);
  }

  @Delete(':eventId/sponsors/:sponsorId')
  async delete(@Param('eventId') eventId: string, @Param('sponsorId') sponsorId: string) {
    await this.sponsorsService.delete(sponsorId);
  }
}
