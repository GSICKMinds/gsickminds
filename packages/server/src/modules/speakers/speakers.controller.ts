import { Get, Controller, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { IEvent, ISpeaker } from 'models';
import { SpeakersService } from './speakers.service.';

@Controller('events')
export class SpeakersController {

  constructor(private readonly speakersService: SpeakersService) { }

  @Post(':eventId/talks/:talkId/speakers')
  async create(@Param('talkId') talkId, @Body() speaker: ISpeaker) {
    return await this.speakersService.create({ ...speaker, talkId });
  }

  @Get(':eventId/talks/:talkId/speakers')
  async retrieveAll(@Param('talkId') talkId) {
    return await this.speakersService.retreiveAll(talkId);
  }

  @Get(':eventId/talks/:talkId/speakers/:speakerId')
  async retrieveById(@Param('talkId') talkId, @Param('speakerId') speakerId) {
    return await this.speakersService.retrieveById(talkId);
  }

  @Put(':eventId/talks/:talkId/speakers/:speakerId')
  async update(@Param('talkId') talkId, @Param('speakerId') speakerId, @Body() speaker: ISpeaker) {
    return await this.speakersService.update(speakerId, { ...speaker, talkId });
  }

  @Delete(':eventId/talks/:talkId/speakers/:speakerId')
  async delete(@Param('talkId') talkId, @Param('speakerId') speakerId) {
    await this.speakersService.delete(speakerId);
  }
}
