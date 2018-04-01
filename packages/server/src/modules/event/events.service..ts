import { Component } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventSchema } from './events.schema';
import { IEvent, Event } from 'models';

@Component()
export class EventsService {
  constructor(@InjectModel(EventSchema) private readonly talkModel: Model<Event>) { }

  async create(newEvent: IEvent) {
    return await this.talkModel.create(newEvent);
  }

  async retreiveAll() {
    return await this.talkModel.find();
  }

  async retrieveLast() {
    return await this.talkModel.findOne().sort('-date');
  }

  async update(eventId: string, newEvent: IEvent) {
    return await this.talkModel.findByIdAndUpdate(eventId, newEvent);
  }
}
