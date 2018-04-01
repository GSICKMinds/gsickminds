import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEvent, Event, ITalk, ISpeaker } from 'models';
import { SpeakerSchema } from './speakers.schema';

@Component()
export class SpeakersService {
    constructor(@InjectModel(SpeakerSchema) private readonly speakerModel: Model<any>) { }

    async create(newSpeaker: ISpeaker) {
        return await this.speakerModel.create(newSpeaker);
    }

    async retreiveAll(talkId: string) {
        return await this.speakerModel.find({ talkId });
    }

    async retrieveById(speakerId: string) {
        return await this.speakerModel.findById(speakerId);
    }

    async update(id: string, speaker: ISpeaker) {
        return await this.speakerModel.findByIdAndUpdate(id, speaker);
    }
}
