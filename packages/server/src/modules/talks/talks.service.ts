import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEvent, Event, ITalk } from 'models';
import { TalkSchema } from './talks.schema';

@Component()
export class TalksService {
  constructor(@InjectModel(TalkSchema) private readonly talkModel: Model<any>) { }

  async create(newTalk: ITalk) {
    return await this.talkModel.create(newTalk);
  }

  async retreiveAll(eventId: string) {
    return await this.talkModel.find({ eventId });
  }

  async retrieveById(id: string) {
    return await this.talkModel.findById(id);
  }

  async update(id: string, talk: ITalk) {
    return await this.talkModel.findByIdAndUpdate(id, talk);
  }
}
