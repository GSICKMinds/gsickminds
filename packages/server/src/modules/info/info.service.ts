import { Component } from '@nestjs/common';
import { InfoSchema } from './info.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Data, IInfo, IContribution, ISponsors, IVenue } from 'models';
import { Model } from 'mongoose';

@Component()
export class InfoService {
  constructor(@InjectModel(InfoSchema) private readonly infoModel: Model<Data>) { }

  async getInfo() {
    return await this.infoModel.findOne().select({ info: 1, _id: 0 });
  }

  async updateInfo(info: IInfo) {
    return await this.infoModel.findOneAndUpdate({}, { $set: { info } }, { upsert: true, new: true });
  }

  async getContribution() {
    return await this.infoModel.findOne().select({ contribution: 1, _id: 0 });
  }

  async updateContribution(contribution: IContribution) {
    return await this.infoModel.findOneAndUpdate({}, { $set: { contribution } }, { upsert: true, new: true });
  }

  async getSponsors() {
    return await this.infoModel.findOne().select({ sponsors: 1, _id: 0 });
  }

  async updateSponsors(sponsors: ISponsors) {
    return await this.infoModel.findOneAndUpdate({}, { $set: { sponsors } }, { upsert: true, new: true });
  }

  async getVenue() {
    return await this.infoModel.findOne().select({ venue: 1, _id: 0 });
  }

  async updateVenue(venue: IVenue) {
    return await this.infoModel.findOneAndUpdate({}, { $set: { venue } }, { upsert: true, new: true });
  }

}
