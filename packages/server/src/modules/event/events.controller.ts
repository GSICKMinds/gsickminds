import { Get, Controller, Post, Put, Body, Param } from '@nestjs/common';
import { IEvent } from 'models';
import { EventsService } from './events.service.';

@Controller('events')
export class EventsController {

  constructor(private readonly eventsService: EventsService) { }

  @Post()
  async create(@Body() newEvent: IEvent) {
    return await this.eventsService.create(newEvent);
  }

  @Get()
  async retreiveAll() {
    return await this.eventsService.retreiveAll();
  }

  @Get('last')
  async retrieveLast() {
    return await this.eventsService.retrieveLast();
  }

  @Put(':id')
  async update(@Param('id') eventId: string, @Body() newEvent: IEvent) {
    return await this.eventsService.update(eventId, newEvent);
  }
}
