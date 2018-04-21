import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { SponsorSchema } from './sponsors.schema';
import { Sponsor, ISponsor } from 'models';

@Component()
export class SponsorsService {
  constructor(@InjectModel(SponsorSchema) private readonly sponsorSchema: Model<Sponsor>) { }

  async getAll(eventId: string) {
    return await this.sponsorSchema.find({ eventId });
  }

  async create(eventId: string, sponsor: ISponsor) {
    return await this.sponsorSchema.create({ ...sponsor, eventId });
  }
  async update(id: string, update: ISponsor) {
    return await this.sponsorSchema.findByIdAndUpdate(id, update, { new: true });
  }

  async delete(id: string) {
    return await this.sponsorSchema.findByIdAndRemove(id);
  }
}
