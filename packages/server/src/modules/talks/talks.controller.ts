import { Get, Controller, Post, Put, Body, Param } from '@nestjs/common';
import { IEvent, ITalk } from 'models';
import { TalksService } from './talks.service';

@Controller('events')
export class TalksController {

  constructor(private readonly talksService: TalksService) { }

  @Post(':eventId/talks')
  async create(@Param('eventId') eventId, @Body() talk: ITalk) {
    return await this.talksService.create({ ...talk, eventId });
  }

  @Get(':eventId/talks')
  async retrieveAll(@Param('eventId') eventId) {
    return await this.talksService.retreiveAll(eventId);
  }

  @Get(':eventId/talks/:talkId')
  async retrieveById(@Param('eventId') eventId, @Param('talkId') talkId) {
    return await this.talksService.retrieveById(talkId);
  }

  @Put(':eventId/talks/:talkId')
  async update(@Param('eventId') eventId, @Param('talkId') talkId, @Body() talk: ITalk) {
    return await this.talksService.update(talkId, { ...talk, eventId });
  }

}
